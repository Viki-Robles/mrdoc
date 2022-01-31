import React, { useState, Fragment } from 'react'
import {
  Input,
  ThemeUIStyleObject,
  Grid,
  Button,
  Text,
  Alert,
  Box,
  Flex,
} from 'theme-ui'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'

interface UserProfileValues {
  email: string
  password: string
  repeatPassword: string
}

export interface SignUpProps {
  sx?: ThemeUIStyleObject
}

const UserProfile = ({ sx }: SignUpProps): JSX.Element => {
  return (
    <BorderWrapper title="My profile">
      <Box sx={{ bg: 'bright', p: 8, maxWidth: '800px' }}>
        <Flex sx={{ gap: 6, mb: 6 }}>
          <Input
            sx={{ width: '500px' }}
            placeholder="First name"
            variant="forms.borderedElement"
          />
          <Input
            sx={{ width: '500px' }}
            placeholder="Last name"
            variant="forms.borderedElement"
          />
        </Flex>
        <Flex sx={{ gap: 6, mb: 6 }}>
          <Input
            sx={{ width: '500px' }}
            placeholder="Old password"
            variant="forms.borderedElement"
          />
          <Input
            sx={{ width: '500px' }}
            placeholder="New password"
            variant="forms.borderedElement"
          />
        </Flex>
        <Flex sx={{ gap: 6, mb: 6 }}>
          <Input
            sx={{ width: '500px' }}
            placeholder="Email address"
            variant="forms.borderedElement"
          />
          <Input
            sx={{ width: '500px' }}
            placeholder="Phone number"
            variant="forms.borderedElement"
          />
        </Flex>
      </Box>
      <Button
        variant="buttons.save"
        sx={{
          justifyContent: 'center',
          display: 'inline-block',
          alignItems: 'center',
        }}
      >
        Save Changes
      </Button>
    </BorderWrapper>
  )
}
export default UserProfile
