import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const docRes = await doc(db, "users", email);
    try {
      await setDoc(docRes, {
        watchList: [],
      });
    } catch (error) {
      console.log(error);
    }

    return response;
  };

  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  };

  const logOut = async () => {
    const response = await signOut(auth);
    return response;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  try {
    return useContext(UserContext);
  } catch (error) {
    throw error;
  }
};
