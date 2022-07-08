import React, { useEffect } from 'react';
// import Allpizzas from '../Piza_data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../redux/actions/pizzaActions';
import Pizza from '../component/Pizza';
import Loader from '../component/Loader';
import Error from '../component/Error';
import Filter from '../component/Filter';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error Error while fetching data />
        ) : (
          <div className="row">
            <Filter />
            {pizzas.map((pizza, index) => (
              <div className="col-md-4 col-12" key={index}>
                <Pizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
