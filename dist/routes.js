"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StoreSessionController = require('./controllers/StoreSessionController'); var _StoreSessionController2 = _interopRequireDefault(_StoreSessionController);
var _StoreController = require('./controllers/StoreController'); var _StoreController2 = _interopRequireDefault(_StoreController);
var _ProductController = require('./controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);

var _auth = require('./middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.post('/sessions/store', _StoreSessionController2.default.store);

routes.post('/store', _StoreController2.default.store);
routes.get('/store', _StoreController2.default.index);
routes.get('/store/:id', _StoreController2.default.show);
routes.put('/store/:id', _auth2.default, _StoreController2.default.update);
routes.delete('/store/:id', _auth2.default, _StoreController2.default.destroy);

routes.post('/product', _auth2.default, _ProductController2.default.store);
routes.get('/product/:store', _auth2.default, _ProductController2.default.index);
routes.get('/product/:store/:id', _auth2.default, _ProductController2.default.show);
routes.put('/product/:store/:id', _auth2.default, _ProductController2.default.update);
routes.delete('/product/:store/:id', _auth2.default, _ProductController2.default.destroy);

exports. default = routes;
