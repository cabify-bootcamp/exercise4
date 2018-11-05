
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditSchema = new Schema({
    credit_identifier: { type: Number, default: 1, unique: true },
    amount: Number,
    }, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Credit = mongoose.model('Credit', creditSchema);

Credit.collection.drop('Credit');

Credit.create(new Credit({}))
.then(() => console.log('Credit Db initialized with unique credit holder'));

module.exports = Credit