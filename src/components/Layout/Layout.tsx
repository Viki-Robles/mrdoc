import React, { Fragment, ReactNode } from 'react'
import { Flex } from 'theme-ui'
import { useUserContext } from '../../providers/AuthProvider'
import NavBar from '../NavBar/NavBar'
import WrapperContainer from '../WrapperContainer/WrapperContainer'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading } = useUserContext()
  return (
    <Fragment>
      <Flex>
        <NavBar isLoading={isLoading} />
        <WrapperContainer>{children}</WrapperContainer>
      </Flex>
    </Fragment>
  )
}

export default Layout
