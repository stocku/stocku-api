import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Service', ServiceSchema);
