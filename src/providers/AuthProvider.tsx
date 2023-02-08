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
} from 'firebase/auth'
import { MrDocRoles, MrDocContactType } from '../types/mrDocRoles'
import { collection } from '@firebase/firestore'
import { addDoc } from 'firebase/firestore'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  user: User
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
  const [user, setUser] = useState<User>()

  const signUp = async (
    displayName: string,
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      if (user !== null) {
        await addDoc(collection(db, 'users'), {
          uid: user?.uid,
          displayName: displayName,
          authProvider: 'local',
          email: user?.email,
        })
        await user.reload()
      }
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

  // useEffect(() => {
  //   const getToken = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       return user
  //         .getIdToken()
  //         .then((token) =>
  //           auth?.currentUser?.getIdTokenResult().then((result) => {
  //             if (result.claims['https://hasura.io/jwt/claims']) {
  //               return token
  //             }
  //             const endpoint = 'https://xxx.cloudfunctions.net/refreshToken'
  //             return fetch(`${endpoint}?uid=${user.uid}`).then((res) => {
  //               if (res.status === 200) {
  //                 return user.getIdToken(true)
  //               }
  //               return res.json().then((e) => {
  //                 throw e
  //               })
  //             })
  //           }),
  //         )
  //         .then((validToken) => {
  //           // Store Token / Or create Apollo with your new token!
  //         })
  //         .catch(console.error)
  //     }

  //     return getToken
  //   })
  // })

  useEffect(() => {
    const getToken = auth.onAuthStateChanged((user) => {
      if (user) {
        user
          ?.getIdToken(true)
          .then((token) => {
            console.log('token:', token)
          })
          .catch((Error) => {
            console.log(Error)
          })
      } else {
        console.log('no token available')
      }
      return getToken
    })
  })

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
