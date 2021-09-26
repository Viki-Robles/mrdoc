import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Grid, Text, Image } from 'theme-ui'

export interface FormWrapperProps {
  sx?: ThemeUIStyleObject
  title?: string
  subheader?: string
  children: ReactNode
  icon?: string
}
export const FormWrapper = ({
  sx,
  title,
  subheader,
  icon,
  children,
}: FormWrapperProps): JSX.Element => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        justifyItems: 'center',
        border: '1px solid',
        borderRadius: 8,
        borderColor: 'rgb(240, 243, 247)',
        backgroundColor: '#ffff',
        boxShadow:
          '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
        margin: '0 auto',
        width: 'fit-content',
        p: '20px',
        mt: 6,
        ...sx,
      }}
    >
      {icon && (
        <Image
          src={icon}
          sx={{ width: '50px', height: '50px', borderRadius: 8 }}
        />
      )}

      <Text
        sx={{
          fontSize: 5,
          fontWeight: 'bold',
          color: '#4B4A4A',
          mt: 2,
        }}
      >
        {title}
      </Text>
      <Text
        sx={{
          fontSize: 2,
          color: '#4B4A4A',
          mb: 4,
        }}
      >
        {subheader}
      </Text>
      {children}
    </Grid>
  )
}
