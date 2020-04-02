"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const ServiceSchema = new (0, _mongoose.Schema)(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    store: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'Service', ServiceSchema);
