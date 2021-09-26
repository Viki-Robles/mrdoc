import React, { ReactNode } from 'react'
import { ErrorMessage } from 'formik'
import { ThemeUIStyleObject, Box, Label } from 'theme-ui'

export interface FormGroupProps {
  label: string
  note?: string
  name: string
  info?: string
  sx?: ThemeUIStyleObject
  children: ReactNode
}

export const FormGroup = ({
  label,
  name,
  info,
  note,
  children,
  sx,
}: FormGroupProps): JSX.Element => {
  return (
    <Box sx={{ mb: 4, ...sx }}>
      <Label
        htmlFor={name}
        sx={{ mb: 1, alignItems: 'center', maxWidth: '200px' }}
      >
        {label}
      </Label>
      {children}
      {note ? <Box sx={{ variant: 'text.small', m: 1 }}>{note}</Box> : null}
      <ErrorMessage name={name}>
        {(msg) => (
          <Box sx={{ m: 1, variant: 'text.small', color: 'error' }}>{msg}</Box>
        )}
      </ErrorMessage>
    </Box>
  )
}
