import React from 'react'
// import { useAuthState } from 'react-firebase/hooks/auth'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'
import { getAuth } from '@firebase/auth'

const Dashboard = (doctor_id: string): JSX.Element => {
  const { doctorsData } = useFetchDoctors()
  const { currentUser } = getAuth()

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
