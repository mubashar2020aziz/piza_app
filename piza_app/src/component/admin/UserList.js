import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions/userAction';
import Loader from './../Loader';
import Error from './../Error';
import { deleteUser } from '../../redux/actions/userAction';

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <h4>User List</h4>
      {loading && <Loader />}
      {error && <Error error="error in users" />}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <i
                          className="fas fa-trash text-danger"
                          style={{ cursor: 'pointer' }}
                          onClick={() => dispatch(deleteUser(user._id))}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
// getallusers
