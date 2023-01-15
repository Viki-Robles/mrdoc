import React, { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'
import { collection } from 'firebase/firestore'
import { useUserContext } from '../../providers/AuthProvider'

interface DashboardProps {
  doctor_id: string
}

const Dashboard = ({ doctor_id }: DashboardProps): JSX.Element | null => {
  const [userDisplayName, setUserDisplayName] = useState('')
  const { doctorsData } = useFetchDoctors()
  const { user } = useUserContext()

  // useEffect(() => {
  //   ;(async () => {
  //     const db = getFirestore()
  //     // get user's uid
  //     const currentUserUid = getAuth().currentUser?.uid

  //     const collectionRef = collection(db, 'users')
  //     const docRef = doc(collectionRef, 'users', currentUserUid as string)
  //     console.log('document', docRef)
  //     const docSnap = await getDoc(docRef)

  //     if (user) {
  //       docSnap.get('users').then((user) => {
  //         if (currentUserUid) {
  //           user.data()
  //           console.log('doc:', user.data())
  //         }
  //       })
  //     }
  //   })()
  // })

  // const user = getAuth()?.currentUserUid?.uid
  //https://firebase.google.com/docs/database/web/read-and-write
  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
        <UserProfile />
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard

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
