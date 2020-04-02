import Service from '../models/Service';

class ServiceController {
  async store(req, res) {
    const service = await Service.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(service);
  }

  async index(req, res) {
    const services = await Service.find({ store: req.storeId });

    return res.json(services);
  }

  async show(req, res) {
    const service = await Service.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(service);
  }

  async update(req, res) {
    const service = await Service.findOneAndUpdate(
      {
        _id: req.params.id,
        store: req.storeId,
      },
      req.body,
      {
        new: true,
      }
    );

    return res.json(service);
  }

  async destroy(req, res) {
    await Service.findOneAndDelete({
      store: req.storeId,
      _id: req.params.id,
    });

    return res.send();
  }
}

export default new ServiceController();
