import { Allpizzas } from './data/Piza_data.mjs';
import pizzaModel from './models/pizzaModels.mjs';

const DefaultData = async () => {
  try {
    // await pizzaModel.deleteMany({});
    await pizzaModel.insertMany(Allpizzas);
    console.log('data import successfully');
  } catch (error) {
    console.log('data import fail', error.message);
  }
};
export default DefaultData;
