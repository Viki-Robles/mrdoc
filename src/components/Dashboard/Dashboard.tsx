import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  doc,
  getDocs,
  getDoc,
  collection,
  DocumentData,
  where,
  query,
  getFirestore,
} from 'firebase/firestore'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'
// import { useUserContext } from '../../providers/AuthProvider'
// import { auth } from '../../config/firebase'

interface DashboardProps {
  doctor_id: string
}

const Dashboard = ({ doctor_id }: DashboardProps): JSX.Element | null => {
  const [users, setUsers] = useState([])
  const { doctorsData } = useFetchDoctors()
  // const { user } = useUserContext()

  useEffect(() => {
    ;(async () => {
      const auth = getAuth()
      const user = auth.currentUser?.uid
      const db = getFirestore()

      const currentUserProfile = await getDoc(doc(db, 'users', user || ''))

      currentUserProfile
        .get('users')
        .then((doc) => {
          // const currentUserInfo = doc.data();
          const currentUserDisplayName = doc.data().displayName
          console.log('user:', currentUserDisplayName)
          // now you can update your state with this value from here if required
        })
        .catch((err) => {
          alert('Error in displaying Name!')
        })
    })()
  }, [])

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     const auth = getAuth()
  //     const user = auth.currentUser

  //     if (user && user.uid) {
  //       const db = getFirestore()
  //       const snapshot = await getDoc(doc(db, 'users', user.uid))
  //       console.log('snapshot:', snapshot.data())
  //     } else {
  //       console.log('no document')
  //     }
  //   }
  //   getUserProfile()
  // }, [])

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

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
        {JSON.stringify(getAuth().currentUser?.uid, null, 2)}
        <UserProfile />
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard

//   db.collection("users").document(FirebaseAuth.getInstance().getCurrentUser().getUid())
//   .get().addOnCompleteListener(task -> {
// if(task.isSuccessful() && task.getResult() != null){
//   String firstName = task.getResult().getString("First Name");
//   String email = task.getResult().getString("Email");
//   String phone = task.getResult().getString("Phone");
//   //other stuff
// }else{
//   //deal with error
// }
// });
// console.log('userName', userName && userName[0])
// const userName = getAuth().currentUser?.displayName
// const userName = getAuth().currentUser?.providerData
// const userName = getAuth().currentUser?.email
