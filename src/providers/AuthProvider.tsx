import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react'
import { auth, db } from '../config/firebase'
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  getAuth,
} from 'firebase/auth'
import { MrDocRoles, MrDocContactType } from '../types/mrDocRoles'
import { MrDocUser } from '../types/users'
import { collection } from '@firebase/firestore'
import { addDoc } from 'firebase/firestore'
// import admin from 'firebase-admin'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  user: MrDocUser
  id?: string
  role?: MrDocRoles
  contactType?: MrDocContactType
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState,
)
export interface AuthContextModel {
  auth: Auth
  user: User | null | undefined
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (
    displayName: string,
    email: string,
    password: string,
  ) => Promise<void>
  sendPasswordResetEmail?: (email: string) => Promise<void>
  updateEmail?: (email: string) => Promise<void>
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null | undefined>()

  async function signUp(
    displayName: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      // cant use admin cause this package is only on the backend of an application
      // TODOS:
      // A user has been created but is not 100% correct as the displayName is not passed.
      // check docs in here: https://firebase.google.com/docs/auth/admin/manage-users
      // the previous commit: https://github.com/Viki-Robles/mrdoc/commit/03a51497ad511f99928c2b62288750bd5ce9ebe0 creates
      // user on firestore on the console.
      // check also this to help you out https://stackoverflow.com/questions/46727150/create-user-with-firebase-admin-sdk-that-can-signin-using-email-and-password

      // const res = await createUserWithEmailAndPassword({
      //   displayName,
      //   email,
      //   password,
      // })
      // const userName = res.displayName
      // const userEmail = res.email
      // const userPassword = res.passwordHash
      // const userUid = res.uid
      // uid: userUid,
      // displayName: userName,
      // email: userEmail,
      // password: userPassword,
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      await addDoc(collection(db, 'users'), {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        // password: user.,
      })
    } catch (err) {
      console.error(err)
      alert(err)
    }
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email)
  }

  function updateUserEmail(newEmail: string, user: User): Promise<void> {
    return updateEmail(user, newEmail)
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    updateUserEmail,
    auth,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
}
