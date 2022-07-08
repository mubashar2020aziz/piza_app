import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userAction';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password, confirmPassword };
    dispatch(userLogin(user));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="card mx-auto"
            style={{ width: '20rem', height: 'auto', marginTop: '40px' }}
          >
            <div className="card-body">
              <h3>Login Form</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="******"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword">ConfirmPassword</label>
                  <input
                    type="confirmpassword"
                    className="form-control"
                    placeholder="******"
                    id="confirmpassword"
                    name="confirmpassword"
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-warning w-100 text-center"
                  onClick={loginHandler}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
