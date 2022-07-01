import React from 'react';

const Success = ({ success }) => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {success}
      </div>
    </>
  );
};

export default Success;
