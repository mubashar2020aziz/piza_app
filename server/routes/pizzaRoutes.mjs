import express from 'express';
const router = express.Router();
import pizzaModel from '../models/pizzaModels.mjs';
import UserModel from '../models/userRegisterModel.mjs';
import orderModel from '../models/orderModel.mjs';
import connection from '../config/config.mjs';
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51LETugCqzIH0o4dDrSvblmBuWnT6s2RDvS1DoaDZY0HPhOTAQshJhQNCAKA8KAPm2c1EKS6Ez22GtRGrX9HzmbXT00ATn9alIy'
);
connection();
// Get all piza // piza request
router.get('/getAllpizzas', async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (err) {
    res.send(err);
  }
});

// register model
router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(422).json({
      status: false,
      message: 'plz fill the form',
    });
  }
  // user already exist or not
  try {
    const userExist = await UserModel.findOne({ email: email });
    if (userExist) {
      return res.status(401).json({
        status: true,
        message: 'user already exist',
      });
    }
    // enter you user
    const user = new UserModel({ name, email, password, confirmPassword });
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(200).json({
        status: true,
        message: 'user register successfuly',
      });
    } else {
      return res.status(422).json({
        status: false,
        message: 'user register fail',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(422).json({
        status: false,
        message: 'plz fill the form',
      });
    }
    const userLogin = await UserModel.find({
      email,
      password,
      confirmPassword,
    });
    if (userLogin.length > 0) {
      const currentUser = {
        name: userLogin[0].name,
        email: userLogin[0].email,
        isAdmin: userLogin[0].isAdmin,
        _id: userLogin[0].Id,
      };
      res.status(200).send(currentUser);
    } else {
      return res.status(401).json({
        status: false,
        message: 'user login fail',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'data base falt',
    });
  }
});

// place order
router.post('/placeorder', async (req, res) => {
  try {
    const { token, subTotal, cartItems, currentUser } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: 'PKR',
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new orderModel({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          // street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionid: payment.source.id,
      });
      newOrder.save();
      res.send('payment successfull');
    } else {
      res.send('payment failed');
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: 'data base error',
    });
  }
});

// order router
router.post('/getuserorder', async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await orderModel.find({ userid });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    });
  }
});
export default router;
