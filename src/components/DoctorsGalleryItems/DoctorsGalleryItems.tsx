import React from 'react'
import { Flex } from 'theme-ui'
import { useFavourite } from '../Favourite/FavouriteProvider'
import { Doctor } from '../../types/doctors'
import { DoctorItem } from '../DoctorItem/DoctorItem'

export interface DoctorsGalleryItemsProps {
  data: Doctor[] | undefined
}

export const DoctorsGalleryItems = ({
  data,
}: DoctorsGalleryItemsProps): JSX.Element => {
  return (
    <Flex sx={{ gap: 4, flexWrap: 'wrap' }}>
      {data &&
        data?.map(({ first_name, last_name, doctor_id, profession, skill }) => {
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
  )
}
