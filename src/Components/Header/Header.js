import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          {user?.uid ? (
            <>
              <span style={{ color: 'white', marginRight: '10px' }}>
                {user.displayName && user.displayName}
              </span>
              <button onClick={handleSignOut}>Signout</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>{' '}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
