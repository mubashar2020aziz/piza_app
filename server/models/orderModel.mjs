import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    transactionid: {
      type: String,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;
