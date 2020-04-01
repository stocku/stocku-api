"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Store = require('../models/Store'); var _Store2 = _interopRequireDefault(_Store);

class StoreSessionController {
  async store(req, res) {
    const { username, password } = req.body;

    const store = await _Store2.default.findOne({ username });

    if (!store) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!(await store.compareHash(password))) {
      return res.status(400).json({ error: 'Invalid Password' });
    }

    return res.json({ store, token: _Store2.default.generateToken(store) });
  }
}

exports. default = new StoreSessionController();
