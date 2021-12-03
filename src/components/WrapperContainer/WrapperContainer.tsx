import React, { ReactNode } from 'react'
import { Box } from 'theme-ui'

interface WrapperContainerProps {
  children: ReactNode
}

const WrapperContainer = ({ children }: WrapperContainerProps): JSX.Element => {
  return <Box sx={{ mt: 9, ml: 10 }}>{children}</Box>
}

export default WrapperContainer
