import { Router } from 'express';
import StoreSessionController from './controllers/StoreSessionController';
import StoreController from './controllers/StoreController';
import ProductController from './controllers/ProductController';

import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/sessions/store', StoreSessionController.store);

routes.post('/store', StoreController.store);
routes.get('/store', StoreController.index);
routes.get('/store/:id', StoreController.show);
routes.put('/store/:id', authMiddleware, StoreController.update);
routes.delete('/store/:id', authMiddleware, StoreController.destroy);

routes.post('/product', authMiddleware, ProductController.store);
routes.get('/product/:store', authMiddleware, ProductController.index);
routes.get('/product/:store/:id', authMiddleware, ProductController.show);
routes.put('/product/:store/:id', authMiddleware, ProductController.update);
routes.delete('/product/:store/:id', authMiddleware, ProductController.destroy);

export default routes;
