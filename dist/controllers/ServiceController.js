"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Service = require('../models/Service'); var _Service2 = _interopRequireDefault(_Service);

class ServiceController {
  async store(req, res) {
    const service = await _Service2.default.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(service);
  }

  async index(req, res) {
    const services = await _Service2.default.find({ store: req.storeId });

    return res.json(services);
  }

  async show(req, res) {
    const service = await _Service2.default.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(service);
  }

  async update(req, res) {
    const service = await _Service2.default.findOneAndUpdate(
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
    await _Service2.default.findOneAndDelete({
      store: req.storeId,
      _id: req.params.id,
    });

    return res.send();
  }
}

exports. default = new ServiceController();
