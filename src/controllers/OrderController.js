import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const order = await Order.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(order);
  }

  async index(req, res) {
    const orders = await Order.find({ store: req.storeId });

    return res.json(orders);
  }

  async show(req, res) {
    const order = await Order.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(order);
  }
}

export default new OrderController();
