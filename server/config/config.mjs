import mongoose from 'mongoose';

const connection = async () => {
  const DB = process.env.DATABASE;
  try {
    await mongoose.connect(DB);
    console.log('databse connection successfull');
  } catch (error) {
    console.log('connection unsuccessfull');
  }
};
export default connection;
