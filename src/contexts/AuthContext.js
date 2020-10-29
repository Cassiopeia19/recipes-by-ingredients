import React, { createContext, useEffect, useState } from "react";
import app from "../base.js";
import Spinner from '../components/spinner/Spinner'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      // if (user && currentUser && user.uid !== currentUser.uid) {
      //   window.location.reload();
      // }
      setCurrentUser(user);
      setPending(false);
    });
  }, [currentUser]);

  if (pending) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
