const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    restaurant: String,
    menu: Array
});

const Restaurant = model('restaurant', restaurantSchema);

module.exports = Restaurant;