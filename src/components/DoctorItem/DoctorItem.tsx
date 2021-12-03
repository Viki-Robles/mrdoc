import React, { useState } from 'react'
import { Box, Button, Flex, Text, Grid, Image } from 'theme-ui'
import { Link } from 'react-router-dom'
import { DOCTOR_PROFILE_PAGE_PATH } from '../../config/paths'
import { Favourite } from '../Favourited/Favourited'

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
    <Grid
      sx={{
        textAlign: 'center',
        backgroundColor: 'bright',
        borderRadius: 8,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        gap: 0,
        p: 4,
      }}
    >
      <div>
        <Image width={70} height={70} />
      </div>
      <Text sx={{ color: 'neutral.980', fontWeight: 'bold', pt: 6 }}>
        Dr. {`${first_name} ${last_name}`}
      </Text>
      {/* <Favourite doctor_id={doctor_id} /> */}
      <Flex
        sx={{ gap: 4, alignItems: 'center', mt: 4, mb: 4, flexWrap: 'wrap' }}
      >
        <Box
          sx={{
            color: '#7794F5',
            backgroundColor: '#D2DBF9',
            fontWeight: 'medium',
            borderRadius: '20px',
            fontSize: 2,
            p: 2,
          }}
        >
          {profession}
        </Box>
        <Link to={`${DOCTOR_PROFILE_PAGE_PATH}/${doctor_id}`}>
          <Text
            sx={{
              display: 'inline-block',
              border: '2px solid',
              borderRadius: '20px',
              color: '#7794F5',
              borderColor: '#7794F5',
              backgroundColor: 'bright',
              fontWeight: 'medium',
              textDecoration: 'none',
              fontSize: 2,
              p: 2,
            }}
          >
            View Profile
          </Text>
        </Link>
      </Flex>
      <Text>Languages</Text>
      <Text>{languages}</Text>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Button variant="buttons.call">Call</Button>
        <Button variant="buttons.mail">Mail</Button>
      </Flex>
    </Grid>
  )
}
