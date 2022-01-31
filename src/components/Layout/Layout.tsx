import React, { Fragment, ReactNode } from 'react'
import { Box, Flex } from 'theme-ui'
import NavBar from '../NavBar/NavBar'
import WrapperContainer from '../WrapperContainer/WrapperContainer'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <Flex>
        <NavBar />
        <WrapperContainer>{children}</WrapperContainer>
      </Flex>
    </Fragment>
  )
}

export default Layout
