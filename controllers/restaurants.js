const Restaurant = require('../models/restaurant');
const { HttpError, ctrlrWrapper } = require('../helpers');
const path = require('path');
const fs = require('fs/promises');

const foodDir = path.join(__dirname, '../', 'public', 'food');

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

const updateFoodPic = async (req, res) => {
    console.log(req.file)
    const { path: tempUpload, originalname } = req.file;
    const fileName = `${req.params.restaurantId}_${originalname}`;
    const resultUpload = path.join(foodDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    const foodURL = path.join('food', fileName);
    await Restaurant.findByIdAndUpdate(req.params.restaurantId, { foodURL });
    res.json({
        foodURL
    })
}

module.exports = {
    getAll: ctrlrWrapper(getAll),
    getById: ctrlrWrapper(getById),
    updateFoodPic: ctrlrWrapper(updateFoodPic)
};