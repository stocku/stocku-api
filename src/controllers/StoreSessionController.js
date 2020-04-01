import Store from '../models/Store';

class StoreSessionController {
  async store(req, res) {
    const { username, password } = req.body;

    const store = await Store.findOne({ username });

    if (!store) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!(await store.compareHash(password))) {
      return res.status(400).json({ error: 'Invalid Password' });
    }

    return res.json({ store, token: Store.generateToken(store) });
  }
}

export default new StoreSessionController();
