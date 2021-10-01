import React from 'react'
import { ThemeUIStyleObject, Text } from 'theme-ui'

export interface ErrorMessageWrapperProps {
  sx?: ThemeUIStyleObject
  message: string
}

export const ErrorMessageWrapper = ({
  message,
  sx,
}: ErrorMessageWrapperProps): JSX.Element => {
  return (
    <Text
      sx={{
        backgroundColor: '#fb6161',
        color: '#ffff',
        p: 2,
        borderRadius: 2,
        ...sx,
      }}
    >
      {message}
    </Text>
  )
}
