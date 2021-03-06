import { Router } from 'express';
import StoreSessionController from './controllers/StoreSessionController';
import StoreController from './controllers/StoreController';
import ProductController from './controllers/ProductController';
import ServiceController from './controllers/ServiceController';
import PaymentController from './controllers/PaymentController';
import OrderController from './controllers/OrderController';

import authMiddleware from './middlewares/auth';

const routes = new Router();

// Stores Routes
routes.post('/sessions/store', StoreSessionController.store);

// Store CRUD
routes.post('/store', StoreController.store);
routes.get('/store', authMiddleware, StoreController.index);
routes.get('/store/:id', authMiddleware, StoreController.show);
routes.put('/store/:id', authMiddleware, StoreController.update);
routes.delete('/store/:id', authMiddleware, StoreController.destroy);

// Product CRUD
routes.post('/product', authMiddleware, ProductController.store);
routes.get('/product', authMiddleware, ProductController.index);
routes.get('/product/:id', authMiddleware, ProductController.show);
routes.put('/product/:id', authMiddleware, ProductController.update);
routes.delete('/product/:id', authMiddleware, ProductController.destroy);

// Service CRUD
routes.post('/service', authMiddleware, ServiceController.store);
routes.get('/service', authMiddleware, ServiceController.index);
routes.get('/service/:id', authMiddleware, ServiceController.show);
routes.put('/service/:id', authMiddleware, ServiceController.update);
routes.delete('/service/:id', authMiddleware, ServiceController.destroy);

// Payment CRUD
routes.post('/payment', authMiddleware, PaymentController.store);
routes.get('/payment', authMiddleware, PaymentController.index);
routes.get('/payment/:id', authMiddleware, PaymentController.show);
routes.put('/payment/:id', authMiddleware, PaymentController.update);
routes.delete('/payment/:id', authMiddleware, PaymentController.destroy);

// Order CR
routes.post('/order', authMiddleware, OrderController.store);
routes.get('/order', authMiddleware, OrderController.index);
routes.get('/order/:id', authMiddleware, OrderController.show);

export default routes;
