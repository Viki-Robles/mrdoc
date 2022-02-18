import React from 'react'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'

const Dashboard = (doctor_id: string): JSX.Element => {
  const { doctorsData } = useFetchDoctors()

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <DoctorsGalleryItems data={doctorsData} />
    </FavouriteProvider>
  )
}

export default Dashboard
