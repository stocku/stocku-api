"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async store(req, res) {
    const product = await _Product2.default.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(product);
  }

  async index(req, res) {
    const products = await _Product2.default.find({ store: req.storeId });

    return res.json(products);
  }

  async show(req, res) {
    const product = await _Product2.default.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(product);
  }

  async update(req, res) {
    const product = await _Product2.default.findOneAndUpdate(
      {
        _id: req.params.id,
        store: req.storeId,
      },
      req.body,
      {
        new: true,
      }
    );

    return res.json(product);
  }

  async destroy(req, res) {
    await _Product2.default.findOneAndDelete({
      store: req.storeId,
      _id: req.params.id,
    });

    return res.send();
  }
}

exports. default = new ProductController();
