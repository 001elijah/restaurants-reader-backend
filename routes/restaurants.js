const express = require('express')
const ctrlr = require('../controllers/restaurants')
const { isValidId } = require('../middlewares')

const router = express.Router()

router.get('/', ctrlr.getAll)

router.get('/:restaurantId', isValidId, ctrlr.getById)

module.exports = router
