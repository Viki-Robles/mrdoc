import React, { ReactNode } from 'react'
import { Box } from 'theme-ui'

export interface NationalityFlagsProps {
  children: ReactNode
}

export const NationalityFlags = ({
  children,
}: NationalityFlagsProps): JSX.Element => {
  return (
    <Box>
      <Box>NationalityFlags</Box>
    </Box>
  )
}
