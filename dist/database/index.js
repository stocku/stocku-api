"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = _mongoose2.default.connect(
      'mongodb+srv://stocku:stockuadmin@stocku-pwwk9.mongodb.net/stockuapi?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
  }
}

exports. default = new Database();
