const Restaurant = require('../models/restaurant');
const { HttpError, ctrlrWrapper } = require('../helpers');

const getAll = async (req, res) => {
    const restaurantsList = await Restaurant.find();
    if (!Object.keys(restaurantsList)) throw HttpError(404, 'Not found');
    res.json(restaurantsList);
}

const getById = async (req, res) => {
    // const { id } = req.params;
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    if (!restaurant) throw HttpError(404);
    res.json(restaurant);
    return restaurant;
}

module.exports = {
    getAll: ctrlrWrapper(getAll),
    getById: ctrlrWrapper(getById)
};