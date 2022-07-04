import React, { useState } from 'react';

const AddNewPizzaslist = () => {
  const [name, setName] = useState();
  const [smallprice, setSmallPrice] = useState();
  const [mediumprice, setMediumPrice] = useState();
  const [largeprice, setLargePrice] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    console.log(pizza);
  };
  return (
    <>
      <form
        className="row g-3 bg-success my-3"
        style={{ borderRadius: '20px' }}
      >
        <div className="col-md-12 py-3">
          <label htmlFor="inputAddress" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputAddress" className="form-label">
            Small Price
          </label>
          <input
            type="text"
            className="form-control"
            id="smallprice"
            placeholder="smallprices"
            value={smallprice}
            onChange={(e) => setSmallPrice(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress" className="form-label">
            Medium Price
          </label>
          <input
            type="text"
            className="form-control"
            id="mediumprice"
            placeholder="mediumprices"
            value={mediumprice}
            onChange={(e) => setMediumPrice(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress" className="form-label">
            Large Price
          </label>
          <input
            type="text"
            className="form-control"
            id="largeprice"
            placeholder="largeprices"
            value={largeprice}
            onChange={(e) => setLargePrice(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            placeholder="Add Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            placeholder="Add Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            placeholder="Add Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="col-12 ">
          <button
            className="btn btn-primary mx-5"
            type="submit"
            onClick={submitForm}
          >
            Add New
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewPizzaslist;
