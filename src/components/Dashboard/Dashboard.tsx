import React from 'react'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'
import { UserProfile } from '../UserProfile/UserProfile'
import { Box } from 'theme-ui'

const Dashboard = (doctor_id: string): JSX.Element => {
  const { doctorsData } = useFetchDoctors()

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
        <Box>
          <UserProfile />
        </Box>
      </Box>
    </FavouriteProvider>
  )
}

export default Dashboard
