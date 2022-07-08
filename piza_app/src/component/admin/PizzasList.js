import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPizzas } from '../../redux/actions/pizzaActions';
import { deletePizza } from '../../redux/actions/pizzaActions';
// import Pizza from '../../component/Pizza';
import Loader from '../../component/Loader';
import Error from '../../component/Error';
import { Link, Outlet } from 'react-router-dom';

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {/* <div className="container"> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Error Error while fetching data />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S/n</th>
              <th scope="col">Pizza Name</th>
              <th scope="col">Prices</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => (
                <tr>
                  <td>
                    <img
                      src={pizza.image}
                      alt="images"
                      style={{
                        width: '30',
                        height: '30px',
                        borderRadius: '20px',
                      }}
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    Small:{pizza.prices[0]['small']}
                    <br />
                    Medium:{pizza.prices[0]['medium']}
                    <br />
                    Large:{pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <Link to={`/admin/editpizza:${pizza._id}`}>
                      <i className="fas fa-edit text-success"></i>
                    </Link>
                    &nbsp; &nbsp;
                    <i
                      className="fas fa-trash text-danger"
                      onClick={() => dispatch(deletePizza(pizza._id))}
                    ></i>
                  </td>
                </tr>
              ))}
            <Outlet />
          </tbody>
        </table>
      )}

      {/* </div> */}
    </>
  );
};

export default PizzasList;
