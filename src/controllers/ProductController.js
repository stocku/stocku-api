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
    const products = await Product.find();

    return res.json(products);
  }

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  }

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  }

  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

export default new ProductController();
