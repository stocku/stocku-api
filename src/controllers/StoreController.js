import Store from '../models/Store';

class StoreController {
  async store(req, res) {
    const store = await Store.create(req.body);

    // store.save();

    return res.json(store);
  }

  async index(req, res) {
    const stores = await Store.find();

    return res.json(stores);
  }

  async show(req, res) {
    const store = await Store.findById(req.params.id);

    return res.json(store);
  }

  async update(req, res) {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(store);
  }

  async destroy(req, res) {
    await Store.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

export default new StoreController();
