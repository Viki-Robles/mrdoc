import React, { Fragment, ReactNode } from 'react'
import { Box, Text, Grid, Flex } from 'theme-ui'

export interface HeroBarProps {
  children: ReactNode
}

export const HeroBar = (): JSX.Element => {
  return (
    <Fragment>
      <Box
        sx={{ backgroundColor: '#050A30', width: '100%', height: '40px' }}
      ></Box>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'bright',
        }}
      >
        <Text
          sx={{
            color: '#050A30',
            fontSize: 6,
            fontWeight: 'semibold',
            margin: '1rem 1rem',
          }}
        >
          Mr.Doc
        </Text>
        <Text></Text>
        <Text>Picture</Text>
      </Flex>
    </Fragment>
  )
}
