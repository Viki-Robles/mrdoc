import React from 'react'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'

export const Dashboard = (doctor_id: string): JSX.Element => {
  const { doctorsData } = useFetchDoctors()

  // const polishDoctorsData = useFetchDoctorsByNationality(nationality.Polish)
  // const spanishDoctorsData = useFetchDoctorsByNationality(nationality.Spanish)

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <WrapperContainer>
        <DoctorsGalleryItems data={doctorsData} />
      </WrapperContainer>
    </FavouriteProvider>
  )
}
