
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message_id: {type: String, require: true},
  destination: {type: String, required: true},
  body: {type: String, required: true},
  sent: {type: Boolean, default: false},
  charge: {type: Boolean, default: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;