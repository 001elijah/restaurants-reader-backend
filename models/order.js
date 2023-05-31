const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const Joi = require('joi');

// const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const orderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is erquired'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    order: [{
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        amount: {
            type: Number,
            required: [true, 'Amount is required'],
        }
    }],
    total: {
        type: Number,
        required: [true, 'Total price is required']
    }
}, { versionKey: false, timestamps: false });

orderSchema.post('save', handleMongooseError);

const clientOrderSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    order: Joi.array().required(),
    total: Joi.number().required(),
})

const schemas = {
    clientOrderSchema
}

const Order = model('order', orderSchema);

module.exports = {
    Order,
    schemas
}