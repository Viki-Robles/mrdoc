import React, { Fragment, ReactNode } from 'react'
import { Grid, Box, Flex } from 'theme-ui'
import { HeroBar } from '../HeroBar/HeroBar'
import NavBar from '../NavBar/NavBar'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <HeroBar />
      <Flex>
        <NavBar />
        <Box>{children}</Box>
      </Flex>
    </Fragment>
  )
}

export default Layout
