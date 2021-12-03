import React, { useState } from 'react'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { nationality } from '../../types/nationality'
import { useFetchDoctorsByNationality } from '../../hooks/useFetchDoctorsByNationality/useFetchDoctorsByNationality'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import { FavouriteProvider } from '../Favourite/FavouriteProvider'

export const Dashboard = (doctor_id: string): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const { doctorsData } = useFetchDoctors()

  const polishDoctorsData = useFetchDoctorsByNationality(nationality.Polish)
  const spanishDoctorsData = useFetchDoctorsByNationality(nationality.Spanish)

  return (
    <FavouriteProvider doctor_id={doctor_id}>
      <WrapperContainer>
        <DoctorsGalleryItems data={doctorsData} />
      </WrapperContainer>
    </FavouriteProvider>
  )
}
