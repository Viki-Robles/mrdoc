import React from 'react'
import { Box } from 'theme-ui'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import DoctorsGalleryItems from '../DoctorsGalleryItems/DoctorsGalleryItems'
import FavouriteProvider from '../Favourite/FavouriteProvider'

interface DashboardProps {
  doctor_id: string
}

export default function Dashboard({
  doctor_id,
}: DashboardProps): JSX.Element | null {
  const { doctorsData } = useFetchDoctors()

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorsGalleryItems data={doctorsData} />
      </Box>
    </FavouriteProvider>
  )
}
