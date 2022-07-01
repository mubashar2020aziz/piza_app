import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <h1>Faham Pizza Shop</h1>
            <p>
              Hy,Dear we are from the same earth,where you belong because are
              all the same generation.No body's are seprated from us. Hy,Dear we
              are from the same earth,where you belong because are all the same
              generation.No body's are seprated from us. Hy,Dear we are from the
              same earth,where you belong because are all the same generation.No
              body's are seprated from us. Hy,Dear we are from the same
              earth,where you belong because are all the same generation.No
              body's are seprated from us.
            </p>
            <table className="table text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    .....Contact Detail......
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row text-center">
                    <i class="fas fa-phone"></i>
                  </th>
                  <td>Phone</td>
                  <td>0971-21862319</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="row text-center">
                    <i class="fas fa-fax"></i>
                  </th>
                  <td>Fax</td>
                  <td>0971-21862319</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="row text-center">
                    <i class="fas fa-envelope-open"></i>
                  </th>
                  <td>Email</td>
                  <td>mmm@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 col-12 my-5">
            <img
              src="images/farmhouse.jpg"
              alt="farmlogo"
              className="img-fluid"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
