import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Label } from 'theme-ui'

export interface FormControlItemProps {
  sx?: ThemeUIStyleObject
  children: ReactNode
}

export const FormControlItem = ({
  children,
  sx,
}: FormControlItemProps): JSX.Element => {
  return <Label sx={{ my: 2, fontWeight: 'body', ...sx }}>{children}</Label>
}
