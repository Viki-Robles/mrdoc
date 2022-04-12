import { getDocs, collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

export const useFetchUsers = async (): Promise<void> => {
  const db = getFirestore()
  const userRef = collection(db, 'users')
  const users: any = []

  try {
    const snapshot = await getDocs(userRef)
    snapshot.docs.forEach((doc) => {
      users.push({
        ...doc.data(),
        id: doc.id,
      })
    })

    // console.log('userData:', users)
  } catch (err: any) {
    console.log(err.message)
  }

  return users
}
