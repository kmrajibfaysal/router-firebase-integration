import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
