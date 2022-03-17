import React, { useState, useEffect } from 'react'
import { getDocs, collection, DocumentData } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'

interface DashboardProps {
  doctor_id: string
}

const Dashboard = ({ doctor_id }: DashboardProps): JSX.Element | null => {
  const [users, setUsers] = useState<DocumentData>([])
  const { doctorsData } = useFetchDoctors()

  useEffect(() => {
    ;(async () => {
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
        setUsers(users)
        console.log('userData:', users)
      } catch (err: any) {
        console.log(err.message)
      }
    })()
  }, [])

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
        {users &&
          users?.map(({ displayName }) => (
            <div key={displayName}>{displayName}</div>
          ))}
        <Box>
          <UserProfile />
        </Box>
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard
