"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _database = require('./database'); var _database2 = _interopRequireDefault(_database);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );

    this.cors();
    this.database();
    this.middlewares();
    this.routes();
  }

  cors() {
    this.server.use(_cors2.default.call(void 0, ));
  }

  database() {
    _database2.default.mongo();
  }

  middlewares() {
    this.server.use(_express2.default.json());
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
