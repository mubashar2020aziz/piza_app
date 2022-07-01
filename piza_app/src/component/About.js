import React from 'react';

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="my-5">Where We are</h1>
        <p className="col-md-12 col-12 mx-auto my-4">
          Hy,Dear we are from the same earth,where you belong because are all
          the same generation.No body's are seprated from us.
        </p>
        <div className="row">
          <h1>Our Speciality</h1>
          <div className="col-md-6 col-12 mx-auto my-4">
            <p>
              Hy,Dear we are from the same earth,where you belong because are
              all the same generation.No body's are seprated from us.
            </p>
          </div>
          <div className="col-md-6 col-10 mx-auto my-4">
            <img
              src="images/chicken_golden_delight.jpg"
              alt="logo"
              style={{ width: '280px', height: '280px', borderRadius: '10px' }}
            />
          </div>
        </div>
        {/* second row */}
        <div className="row ">
          <h1 className="Team" style={{ marginTop: '20px' }}>
            Our Cheff
          </h1>
          <div className="col-md-4 col-10 mx-auto my-4">
            <img src="images/cheff image1.jpg" alt="image1" class="img-fluid" />
          </div>
          <div className="col-md-4 col-10 mx-auto my-4">
            <img src="images/cheff2.jpg" alt="image1" class="img-fluid" />
          </div>
          <div className="col-md-4 col-10 mx-auto my-4">
            <img src="images/cheff3.jpg" alt="image1" class="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
