import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Flex } from 'theme-ui'

export interface FormActionsProps {
  sx?: ThemeUIStyleObject
  children: ReactNode
}

export const FormActions = ({
  children,
  sx,
}: FormActionsProps): JSX.Element => {
  return (
    <Flex
      sx={{
        my: 5,
        gap: 5,
        gridRowGap: 3,
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {children}
    </Flex>
  )
}
