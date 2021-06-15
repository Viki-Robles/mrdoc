import React, { ReactNode, useEffect, useState, useContext } from "react";
import firebase from "firebase/app";
import { auth } from "../config/firebase";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface AuthContextModel {
  user: firebase.User | null;
  signIn: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  resetPassword: (email: string) => Promise<void>;
  signUp: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  // signOut: () => void;
  // sendPasswordResetEmail: (email: string) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<firebase.User | null>(null);

  function signUp(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email.trim(), password);
  }

  function signIn(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email.trim(), password);
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubsrcibe;
  }, []);

  const values = {
    signUp,
    resetPassword,
    user,
    signIn,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
