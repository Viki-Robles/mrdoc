import React from 'react'
import { ThemeUIStyleObject, Box, Themed, Text } from 'theme-ui'
import { Link } from 'react-router-dom'

export interface NotFoundProps {
  sx?: ThemeUIStyleObject
}

export const NotFound = ({ sx }: NotFoundProps): JSX.Element => {
  return (
    <Box sx={{ ...sx }}>
      <Box as="main" sx={{ textAlign: 'center', ...sx }}>
        <Themed.h1>Oops.. 🙄 there&apos;s no page here.</Themed.h1>
        <Text>
          If you&apos;re lost,{' '}
          <Link to="/">
            <Text
              sx={{
                display: 'inline-block',
                textDecoration: 'none',
                color: '#3F88F5',
              }}
            >
              head back home
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  )
}
