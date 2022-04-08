import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please login.</h2>
      <div style={{ margin: '10px' }}>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
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
