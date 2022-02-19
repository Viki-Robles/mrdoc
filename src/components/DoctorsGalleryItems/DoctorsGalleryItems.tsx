import React, { Fragment, useState } from 'react'
import { Flex, Input } from 'theme-ui'
import { Doctor } from '../../types/doctors'
import { DoctorItem } from '../DoctorItem/DoctorItem'
import SmallWrapper from '../SmallWrapper/SmallWrapper'

export interface DoctorsGalleryItemsProps {
  data: Doctor[] | undefined
}

export const DoctorsGalleryItems = ({
  data,
}: DoctorsGalleryItemsProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const doctorsSum = data?.length

  return (
    <Fragment>
      <Input
        sx={{
          width: '450px',
          backgroundColor: 'bright',
          border: 'transparent',
          br: 8,
          mb: 6,
        }}
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <SmallWrapper data={doctorsSum} />
      <Flex sx={{ gap: 4, flexWrap: 'wrap' }}>
        {data &&
          data
            ?.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (
                val.skill.skill_name
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val
              }
            })
            .map(({ first_name, last_name, doctor_id, profession, skill }) => {
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
            })}
      </Flex>
    </Fragment>
  )
}
