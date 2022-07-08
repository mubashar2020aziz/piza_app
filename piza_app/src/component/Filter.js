import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPizza } from '.././redux/actions/pizzaActions';

const Filter = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const dispatch = useDispatch();

  return (
    <>
      <form
        className="row g-3 needs-validation d-flex text-center "
        method="GET"
      >
        <div className="col-md-5 ">
          <input
            type="text"
            className="form-control mx-3"
            id="validationCustom01"
            placeholder="Search Pizza"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoCapitalize="off"
          />
        </div>

        <div className="col-md-5">
          <select
            className="form-select mx-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="validationCustom04"
          >
            <option>All</option>
            <option>veg</option>
            <option>nonveg</option>
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(filterPizza(search, category));
            }}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
