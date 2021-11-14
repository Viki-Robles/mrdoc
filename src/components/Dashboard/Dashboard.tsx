import React, { useState, useMemo } from 'react'
import { Flex, Button, Box } from 'theme-ui'
import { DoctorItem } from '../DoctorItem/DoctorItem'
import { useFetchDoctors } from '../../hooks/useFetchDoctors/useFetchDoctors'
import { nationality } from '../../types/nationality'
import { useFetchDoctorsByNationality } from '../../hooks/useFetchDoctorsByNationality/useFetchDoctorsByNationality'

export const Dashboard = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const { doctorsData } = useFetchDoctors()
  const polishDoctorsData = useFetchDoctorsByNationality(nationality.Polish)

  return (
    <Box>
      {/* <Flex sx={{ gap: 4 }}>
        <Button onClick={() => setToggle(!toggle)}>Spanish</Button>
        {toggle &&
          polishDoctorsData.data?.doctors.map(
            ({ first_name, last_name, doctor_id, profession, skill }) => {
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
      </Flex> */}

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
    </Box>
  )
}
