"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Store = require('../models/Store'); var _Store2 = _interopRequireDefault(_Store);

class StoreController {
  async store(req, res) {
    const store = await _Store2.default.create(req.body);

    // store.save();

    return res.json(store);
  }

  async index(req, res) {
    const stores = await _Store2.default.find();

    return res.json(stores);
  }

  async show(req, res) {
    const store = await _Store2.default.findById(req.params.id);

    return res.json(store);
  }

  async update(req, res) {
    const store = await _Store2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(store);
  }

  async destroy(req, res) {
    await _Store2.default.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

exports. default = new StoreController();
