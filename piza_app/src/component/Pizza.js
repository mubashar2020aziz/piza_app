import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <>
      <div className="card mx-4 my-3" style={{ width: '18rem' }}>
        <img
          src={pizza.image}
          className="card-img-top"
          alt="firstimage"
          style={{ height: '250px', cursor: 'pointer' }}
        />

        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6>variant</h6>
              <select
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((variant, index) => (
                  <option key={index}>{variant}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <h6>quantity</h6>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((value, index) => (
                  <option key={index}>{index + 1}</option>
                ))}
              </select>
            </div>
          </div>
          {/* second row */}
          <div className="row my-3">
            <div className="col-md-6 my-2">
              price : {pizza.prices[0][varient] * quantity}/-RS
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-warning text-white"
                onClick={addToCartHandler}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* model */}
        {/* <a
          className="btn btn-primary"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Click Me
        </a>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              {pizza.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              <img
                src={pizza.image}
                className="card-img-top"
                alt="firstimage"
                style={{ height: '250px' }}
              />
            </div> */}
        {/* description */}
        {/* <div>
              <h5>description</h5>
              <h6>{pizza.description}</h6>
            </div>
          </div> */}
        {/* </div> */}
        {/* model */}
      </div>
    </>
  );
};
export default Pizza;
