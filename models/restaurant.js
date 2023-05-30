const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    restaurant: String,
    menu: [
        {
            title: String,
            price: Number
        }
    ],
    foodURL: String
});

const Restaurant = model('restaurant', restaurantSchema);

module.exports = Restaurant;