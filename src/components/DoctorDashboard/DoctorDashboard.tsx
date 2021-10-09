import React from 'react'
import { Box } from 'theme-ui'
import { useFetchDoctorsById } from '../../hooks/useFetchDoctorsById/useFetchDoctorsById'
import { useParams } from 'react-router-dom'

export const DoctorDashboard = (): JSX.Element | null => {
  const { doctor_id } = useParams<{
    doctor_id: string
  }>()
  const { data: getDoctorById } = useFetchDoctorsById(doctor_id)

  if (getDoctorById?.doctors) {
    const doctorData = getDoctorById.doctors[0]
    return (
      <Box>
        <Box>Details Page</Box>
        {doctorData.first_name}
      </Box>
    )
  }
  return null
}
