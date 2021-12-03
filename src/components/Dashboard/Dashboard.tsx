import React, { useState } from 'react'
import { Box } from 'theme-ui'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { nationality } from '../../types/nationality'
import { useFetchDoctorsByNationality } from '../../hooks/useFetchDoctorsByNationality/useFetchDoctorsByNationality'
import { DoctorsGalleryItems } from '../DoctorsGalleryItems/DoctorsGalleryItems'
import WrapperContainer from '../WrapperContainer/WrapperContainer'

export const Dashboard = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const { doctorsData } = useFetchDoctors()

  const polishDoctorsData = useFetchDoctorsByNationality(nationality.Polish)
  const spanishDoctorsData = useFetchDoctorsByNationality(nationality.Spanish)

  return (
    <WrapperContainer>
      <DoctorsGalleryItems data={doctorsData} />
    </WrapperContainer>
  )
}
