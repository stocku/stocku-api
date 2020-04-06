import { Schema, model } from 'mongoose';

const PaymentSchema = new Schema(
  {
    cash: {
      type: String,
      required: false,
    },
    cards: [
      {
        credit: [
          {
            installments: {
              type: Number,
              required: false,
            },
          },
        ],
        debit: {
          type: String,
          required: false,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export default model('Payment', PaymentSchema);
