import React from 'react'
import { Box, Flex, Text, Grid } from 'theme-ui'

interface SmallWrapperProps {
  data: any
}

function SmallWrapper({ data }: SmallWrapperProps): JSX.Element {
  return (
    <Flex
      sx={{
        width: '200px',
        height: '50px',
        bg: 'bright',
        mb: 6,
      }}
    >
      <Box
        sx={{
          bg: '#E7EFFC',
          color: '#5165CF',
          width: '40px',
          alignSelf: 'center',
          padding: '5px',
          fontWeight: 'normal',
          borderRadius: '5px',
        }}
      >
        {data}
      </Box>
      <Text
        sx={{
          alignSelf: 'center',
          ml: '10px',
          color: '#52575C',
          fontWeight: 'semibold',
        }}
      >
        Doctors
      </Text>
    </Flex>
  )
}

export default SmallWrapper
