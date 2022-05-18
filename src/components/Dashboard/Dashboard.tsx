import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  doc,
  getDocs,
  getDoc,
  DocumentData,
  where,
  query,
  getDocFromServer,
  getFirestore,
} from 'firebase/firestore'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'
import { collection } from 'firebase/firestore'
// import { useUserContext } from '../../providers/AuthProvider'
// import { auth, db } from '../../config/firebase'

interface DashboardProps {
  doctor_id: string
}

const Dashboard = ({ doctor_id }: DashboardProps): JSX.Element | null => {
  const [users, setUsers] = useState([])
  // const { doctorsData } = useFetchDoctors()

  useEffect(() => {
    ;(async () => {
      const db = getFirestore()
      const collectionRef = collection(db, 'users')
      const user = getAuth().currentUser?.uid
      const docRef = doc(collectionRef, 'users', (user as string) || '')
      const docSnap = await getDoc(docRef)

      docSnap.get('users').then((user) => {
        if (user.exists()) {
          user.data()
          console.log('doc:', user.data())
        }
      })
    })()
  }, [])

  // const user = getAuth()?.currentUser?.uid
  //https://firebase.google.com/docs/database/web/read-and-write
  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <DoctorsGalleryItems data={doctorsData} /> */}
        {JSON.stringify(users)}
        <UserProfile />
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard

// useEffect(() => {
//   ;(async () => {
//     const users: any = []
//     const db = getFirestore()
//     const userRef = collection(db, 'users')
//     // const userName = getAuth().currentUser?.displayName
//     // const userDocument = query(userRef, where('displayName', '==', userName))
//     // console.log('name', userName)
//     try {
//       const snapshot = await getDocs(userRef)
//       console.log(users)
//       snapshot.docs.forEach((doc) => {
//         const { displayName } = doc.data()
//         users.push({
//           ...doc.data(),
//           id: doc.id,
//           displayName,
//         })
//       })
//       console.log(users)
//       setUsers(users)
//     } catch (err: any) {
//       console.log(err.message)
//     }
//   })()
// }, [])

// const auth = getAuth()
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid
//       console.log('user:', uid)
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   })
