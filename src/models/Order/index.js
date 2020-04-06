import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    costumer: {
      type: String,
      required: false,
    },
    total: {
      type: Number,
      default: 0,
      required: true,
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          default: 0,
        },
      },
    ],
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: 'Service',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('Order', OrderSchema);
