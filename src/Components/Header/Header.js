import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
  // const { user, handleSignOut } = useFirebase();

  const [user] = useAuthState(auth);

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
              <button onClick={() => signOut(auth)}>Signout</button>
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
