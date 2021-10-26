import React, { ReactNode } from 'react'
import { Grid, Box, Flex } from 'theme-ui'
import NavBar from '../NavBar/NavBar'

export interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Flex>
      <NavBar />
      <Box>{children}</Box>
    </Flex>
  )
}
