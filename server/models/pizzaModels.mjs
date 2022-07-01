import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const pizzaModel = mongoose.model('pizza', pizzaSchema);
export default pizzaModel;
