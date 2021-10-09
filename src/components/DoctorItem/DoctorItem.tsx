import React from 'react'
import { Box, Button, Flex, Text } from 'theme-ui'
import { Link } from 'react-router-dom'
import { DOCTOR_PROFILE_PAGE_PATH } from '../../config/paths'

export interface DoctorItemProps {
  first_name?: string
  last_name?: string
  profession?: string
  languages?: string
  doctor_id: string
}

export const DoctorItem = ({
  first_name,
  last_name,
  profession,
  languages,
  doctor_id,
}: DoctorItemProps): JSX.Element => {
  return (
    <Link to={`${DOCTOR_PROFILE_PAGE_PATH}/${doctor_id}`}>
      <Box>Image</Box>
      <Box>{`${first_name}${last_name}`}</Box>
      <Flex>
        <Box>{profession}</Box>
        <Button>View Profile</Button>
      </Flex>
      <Text>Languages</Text>
      <Text>{languages}</Text>
      <Flex>
        <Button>Call</Button>
        <Button>Mail</Button>
      </Flex>
    </Link>
  )
}
