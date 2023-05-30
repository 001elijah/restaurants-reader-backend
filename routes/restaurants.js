const express = require('express')
const ctrlr = require('../controllers/restaurants')
const { isValidId, upload } = require('../middlewares')

const fs = require('fs');

const router = express.Router()

router.get('/', ctrlr.getAll)

router.get('/:restaurantId', isValidId, ctrlr.getById)

router.patch('/:restaurantId', upload.single('food'), ctrlr.updateFoodPic)

module.exports = router
