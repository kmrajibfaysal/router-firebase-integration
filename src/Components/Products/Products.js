import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Who is there?</h2>
      <h5>{user ? user.displayName : 'No body'}</h5>
    </div>
  );
};

export default Products;
