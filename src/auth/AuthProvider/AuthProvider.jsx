import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User Register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in With Email Pass
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign in with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Log Out
  const handleLogOut = () => {
    signOut(auth);
  };

  // Update Profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Password Reset Email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    handleRegister,
    handleLogin,
    googleSignIn,
    handleLogOut,
    setUser,
    updateUserProfile,
    user,
    loading,
    resetPassword,
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
