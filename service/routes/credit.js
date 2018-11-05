
const {Validator, ValidationError} = require('express-json-validator-middleware');
const router = require('express').Router();
const Credit = require('../models/Credit');
const creditSchema = require('../middlewares/creditSchema')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const validator = new Validator({allErrors:true});
const validate = validator.validate;


router.post('/', jsonParser, validate({body: creditSchema}), (req, res, next) => {

    const { amount } = req.body;
    console.log(amount)

    Credit.findOneAndUpdate({}, { $inc: { "amount": amount } }, { new: true })
        .then(credit => res.status(200).json(credit))
        .catch(err => res.status(500).send('Error', err))
        
})


module.exports = router;