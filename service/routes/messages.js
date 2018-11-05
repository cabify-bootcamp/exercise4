require('dotenv').config();

const {Validator, ValidationError} = require('express-json-validator-middleware');
const messageSchema = require('../middlewares/messageSchema')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const validator = new Validator({allErrors:true});
const validate = validator.validate;
const express = require("express");
const axios = require("axios");
const router = express.Router();
const Message = require('../models/Message')
const hostname =  process.env.MSG_SERV || 'localhost'
const port = process.env.SERVICE_PORT || '3000'

const service = axios.create({
  baseURL: `http://${hostname}:${port}`
});

router.post('/', jsonParser, validate({body: messageSchema}), (req, res, next) => {



  const {destination, body, message_id} = req.body

  Message.findOne({ message_id })
  .then( foundMessage => {

    if (foundMessage) throw new Error('Message already exist');

    return message = new Message({
      message_id,
      destination,
      body
    }).save()

  })
  .then( () => {

     return service.post('/message', {destination, body})

  })
  .then( response => {

    res.send( response.data )

  })
  .then( () => {

    Message.findOne( {message_id: message_id} )
    .then( resp =>
      {
       Message.findByIdAndUpdate(resp._id, {$set: {'sent': true}}, {new: true},  function(err, doc){

         if (err) { res.status(500).send(`The message was not successfully sent: ${err}`) }

         Message.findByIdAndUpdate(mId, {$set: {'charge': true}}, {new: true},  function(err, doc){

          if (err) { res.status(500).send(`The message was not charged: ${err}`) }

        })

      })

    })

  }) 

  .catch(error => 
    res.status(500).send(`${error}`)
  );
  
})


router.get('/',(req,res,next) => {
  Message.find()
      .sort('-updated_at')
      .select({'destination': 1, 'body': 1, '_id': 0})
      .then( objList => res.status(200).json(objList))
      .catch(e => next(e))
})

  
module.exports = router;