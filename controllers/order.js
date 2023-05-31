const { ctrlrWrapper } = require('../helpers');
const { Order } = require('../models/order');

const order = async (req, res) => {
    const newOrder = await Order.create({...req.body});

    res.status(201).json({
        order: {
            name: newOrder.name,
            email: newOrder.email,
            phone: newOrder.phone,
            address: newOrder.address,
            order: newOrder.order,
            total: newOrder.total,
        }
    })
};



module.exports = {
    order: ctrlrWrapper(order)
}