import React, { Fragment, ReactNode } from 'react'
import { Grid, Box, Flex } from 'theme-ui'
import { HeroBar } from '../HeroBar/HeroBar'
import NavBar from '../NavBar/NavBar'

export interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <HeroBar />
      <Flex>
        <NavBar />
        <Box sx={{ ml: 10 }}>{children}</Box>
      </Flex>
    </Fragment>
  )
}
