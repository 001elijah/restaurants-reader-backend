const express = require("express");
const router = express.Router();
const { validateBody } = require('../middlewares');
const { schemas } = require('../models/order');
const ctrlr = require('../controllers/order');

router.post('/', validateBody(schemas.clientOrderSchema), ctrlr.order);

module.exports = router;