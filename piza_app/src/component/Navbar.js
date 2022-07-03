import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/userAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h6>Mubashar Mern Developer</h6>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Detail
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {currentUser ? (
                        <>
                          <li>
                            <Link className="dropdown-item" to="/">
                              {currentUser.name}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/login"
                              onClick={() => dispatch(logoutUser())}
                            >
                              Logout
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/order">
                              Orders
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          {/* <li>
                            <Link class="dropdown-item" to="/login">
                              Login
                            </Link>
                          </li> */}
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              aria-current="page"
                              to="/register"
                            >
                              Register
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              aria-current="page"
                              to="/login"
                            >
                              Login
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart {cartState.cartItems.length}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
