import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please login.</h2>
      <div style={{ margin: '10px' }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="" id="" placeholder="Your Email" /> <br />
        <input type="password" name="" id="" placeholder="Password" /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
