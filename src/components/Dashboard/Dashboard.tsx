import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { DoctorItem } from '../DoctorItem/DoctorItem'
import { Flex } from 'theme-ui'

export const Dashboard = (): JSX.Element => {
  const { doctorsData } = useFetchDoctors()

  return (
    <Flex sx={{ gap: 8, margin: 4, flexWrap: 'wrap' }}>
      {doctorsData &&
        doctorsData.map(
          ({ doctor_id, last_name, first_name, profession, skill }) => {
            return (
              <DoctorItem
                key={doctor_id}
                last_name={last_name}
                first_name={first_name}
                profession={profession}
                languages={skill.skill_name}
                doctor_id={doctor_id}
              />
            )
          },
        )}
    </Flex>
  )
}
