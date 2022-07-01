import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
import morgan from 'morgan';
const app = express();
import connection from './config/config.mjs';
import DefaultData from './seeder.mjs';
// import { Allpizzas } from './data/Piza_data.mjs';
import pizzaModel from './models/pizzaModels.mjs';
import UserModel from './models/userRegisterModel.mjs';
import orderModel from './models/orderModel.mjs';
import router from './routes/pizzaRoutes.mjs';

// import router from './routes/userRegisterRouter.mjs';
import cors from 'cors';
// import colors from 'colors';

const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// app.use(colors());
connection();
// Allpizzas;
pizzaModel();
UserModel();
orderModel();
// route
app.use('/api/pizzas', router);
// app.get('/', (req, res) => {
//   return res.status(200).json({
//     status: 'true',
//     message: 'data successfull click',
//   });
// });

app.listen(port, () => {
  console.log('server start and new' + port);
});
DefaultData();
