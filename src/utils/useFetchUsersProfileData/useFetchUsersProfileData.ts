import { getDocs, collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

// create a  function that fetches user from firebase by uuid
// and passes as a parameter to the second function
// const { uuid } = useFetchUserByUid()
//then const { users } = useFetchUsersProfileData(uuid)

// export const useFetchUsersProfileData = async (): Promise<any> => {
//   const db = getFirestore()
//   const userRef = collection(db, 'users')
//   const users: any = []

//   const result = await getDocs(userRef)
//     .then((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         users.push({
//           ...doc.data(),
//           // ui: doc.ui,
//         })
//       })
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })

//   console.log('users', users)

//   return users
// }
