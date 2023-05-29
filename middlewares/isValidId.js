const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (req, res, next) => {
    const { restaurantId } = req.params;
    if (!isValidObjectId(restaurantId)) {
        next(HttpError(400, `${restaurantId} is not valid id`))
    }
    next();
};

module.exports = isValidId;