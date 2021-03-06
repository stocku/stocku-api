import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const product = await Product.create({
      ...req.body,
      store: req.storeId,
    });

    return res.json(product);
  }

  async index(req, res) {
    const products = await Product.find({ store: req.storeId });

    return res.json(products);
  }

  async show(req, res) {
    const product = await Product.findOne({
      _id: req.params.id,
      store: req.storeId,
    });

    return res.json(product);
  }

  async update(req, res) {
    const product = await Product.findOneAndUpdate(
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
    await Product.findOneAndDelete({
      store: req.storeId,
      _id: req.params.id,
    });

    return res.send();
  }
}

export default new ProductController();
