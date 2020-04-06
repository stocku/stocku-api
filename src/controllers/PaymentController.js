import Payment from '../models/Payment';

class PaymentController {
  async store(req, res) {
    const payment = await Payment.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(payment);
  }

  async index(req, res) {
    const payments = await Payment.find({ store: req.storeId });

    return res.json(payments);
  }

  async show(req, res) {
    const payment = await Payment.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(payment);
  }

  async update(req, res) {
    const payment = await Payment.findOneAndUpdate(
      {
        _id: req.params.id,
        store: req.storeId,
      },
      req.body,
      {
        new: true,
      }
    );

    return res.json(payment);
  }

  async destroy(req, res) {
    await Payment.findOneAndDelete({
      store: req.storeId,
      _id: req.params.id,
    });

    return res.send();
  }
}

export default new PaymentController();
