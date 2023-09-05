import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { auth, db } from "../config/firebase";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  UserInfo,
} from "firebase/auth";
import { MrDocRoles, MrDocContactType } from "../types/mrDocRoles";
import { collection } from "@firebase/firestore";
import { addDoc } from "firebase/firestore";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo;
  id?: string;
  role?: MrDocRoles;
  contactType?: MrDocContactType;
  signUp: (
    displayName: string,
    email: string,
    password: string,
  ) => Promise<void>;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState,
);
export interface AuthContextModel {
  auth: Auth;
  user: UserInfo | null | undefined;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (
    displayName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  updateEmail?: (email: string) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserInfo>();
  const [authState, setAuthState] = useState<{
    status: string;
    firebaseUser?: UserInfo | null;
    token?: string;
  }>({ status: "loading", firebaseUser: null, token: "" });

  useEffect(() => {
    return auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        const idTokenResult = await firebaseUser.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        console.log("token:", token);
        console.log(
          "firebase-displayname:",
          authState.firebaseUser?.displayName,
        );

        if (hasuraClaim) {
          setAuthState({ status: "in", firebaseUser, token });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  const signUp = async (
    displayName: string,
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user !== null) {
        await addDoc(collection(db, "users"), {
          uid: user?.uid,
          displayName: displayName,
          authProvider: "local",
          email: user?.email,
        });
        await user.reload();
        // await useInsertUsers();
        console.log("mutation is running!!!");
      }
    } catch (err) {
      console.log("signUp error", err);
    }
  };

  // useEffect(() => {
  //   const addUsers = async () => {
  //     await useInsertUsers();
  //   };
  //   addUsers();
  // }, []);

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserEmail(newEmail: string, user: User): Promise<void> {
    return updateEmail(user, newEmail);
  }

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    updateUserEmail,
    auth,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};

// const getToken = auth.onAuthStateChanged((user) => {
//   if (user) {
//     user
//       ?.getIdToken(true)
//       .then((token) => {
//         console.log("token:", token);
//       })
//       .catch((Error) => {
//         console.log(Error);
//       });
//   } else {
//     console.log("no token available");
//   }
//   return getToken;
// });

// auth.onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     return firebaseUser
//       .getIdToken()
//       .then(
//         (token) =>
//           auth.currentUser &&
//           auth?.currentUser.getIdTokenResult().then((result) => {
//             if (result.claims["https://hasura.io/jwt/claims"]) {
//               return token;
//             }
//             const endpoint = "https://xxx.cloudfunctions.net/refreshToken";
//             return fetch(`${endpoint}?uid=${firebaseUser.uid}`).then(
//               (res) => {
//                 if (res.status === 200) {
//                   return firebaseUser.getIdToken(true);
//                 }
//                 return res.json().then((e) => {
//                   throw e;
//                 });
//               },
//             );
//           }),
//       )
//       .then((validToken) => {
//         // Store Token / Or create Apollo with your new token!
//       })
//       .catch(console.error);
//   }
// });
