import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/userAction';
import Loader from '../component/Loader';
import Success from '../component/Success';
import Error from '../component/Error';
// import { Link } from 'react-router-dom';
// import {registerUserReducer} from '../redux/reducer/userReducer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerState;

  // let name, value;
  // const handleInput = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };
  const dispatch = useDispatch();
  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password not match');
    } else {
      const user = { name, email, password, confirmPassword };
      console.log(user);
      dispatch(registerUser(user));
    }
  };

  return (
    <>
      <div className="container">
        {loading && <Loader />}
        {success && <Success success="user register successfully" />}
        {error && <Error error="something went wrong" />}
        <div className="row">
          <div
            className="card mx-auto"
            style={{ width: '20rem', height: 'auto', marginTop: '40px' }}
          >
            <div className="card-body">
              <h3>Registeration Form</h3>
              <form method="POST">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your name"
                    id="Name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="******"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="confirmpassword"
                    className="form-control"
                    placeholder="******"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <button
                  className="btn btn-warning w-100 text-center"
                  onClick={registerHandler}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
