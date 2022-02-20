import React from 'react'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'
import { getAuth } from '@firebase/auth'
import { db } from '../../config/firebase'

const Dashboard = (doctor_id: string): JSX.Element => {
  const { doctorsData } = useFetchDoctors()
  const { currentUser } = getAuth()

  // const getUsersDisplayName = (next, fallback) => {
  //   const user = getAuth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       const dbUser = db.coll
  //     }
  //   })
  // }

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
        <Box>
          <UserProfile />
          <Box> {currentUser?.displayName}</Box>
        </Box>
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard

// class Firebase {
//   constructor() {
//     app.initializeApp(config).firestore();
//     /* helpers */
//     this.fieldValue = app.firestore.FieldValue;

//     /* Firebase APIs */
//     this.auth = app.auth();
//     this.db = app.firestore();

// onAuthUserListener = (next, fallback) =>
//     this.auth.onAuthStateChanged(authUser => {
//       if (authUser) {
//            this.db.collection('users').doc(authUser.uid)
//               .get()
//               .then(snapshot => {
//                 const userData = snapshot.data();
//                 console.log(userData);
//                 //Do whatever you need with userData
//                 //i.e. merging it with authUser
//                 //......

//                 next(authUser);
//           });
//       } else {
//         fallback();
//       }
//     });
