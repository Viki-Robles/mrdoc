import React, { useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Input, Container, Alert, Button } from 'theme-ui'
import * as Yup from 'yup'
import { FormGroup } from '../FormGroup/FormGroup'
import { FormActions } from '../FormActions/FormActions'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { passwordValidation } from '../../utils/passwordValidation/passwordValidation'
import { updatePassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

export interface ModifyUserPassword {
  password: string
}

const ModifyUserSchema = Yup.object().shape({
  password: passwordValidation,
})

const UserProfile = (): JSX.Element => {
  const [passwordMessage, setPasswordMessage] = useState<string>('')

  const auth = getAuth()
  const user = auth.currentUser

  return (
    <Container variant="auth">
      <BorderWrapper title="Account settings" sx={{ mt: 6 }}>
        <Formik
          enableReinitialize
          initialValues={{
            password: '',
          }}
          onSubmit={(
            values: ModifyUserPassword,
            actions: FormikHelpers<ModifyUserPassword>,
          ) => {
            if (user) {
              updatePassword(user, values.password)
                .then(() => {
                  actions.setSubmitting(false)
                  setPasswordMessage('Your Password has been updated.')
                })
                .catch(() => {
                  actions.setSubmitting(false)
                  setPasswordMessage(
                    'There was an issue changing your password and it has not been updated. Please try again.',
                  )
                })
            }
          }}
          validationSchema={ModifyUserSchema}
        >
          {({ isSubmitting, getFieldProps }) => (
            <Form>
              <FormGroup label="Change username" name="username" sx={{ mt: 4 }}>
                <Input
                  sx={{ width: '500px', borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('password')}
                  type="username"
                  id="username"
                />
              </FormGroup>
              <FormGroup label="Change email" name="email" sx={{ mt: 4 }}>
                <Input
                  sx={{ width: '500px', borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('password')}
                  type="email"
                  id="email"
                />
              </FormGroup>
              <FormGroup label="Change password" name="password" sx={{ mt: 4 }}>
                <Input
                  sx={{ width: '500px', borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('password')}
                  type="password"
                  id="password"
                />
              </FormGroup>
              <FormActions>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormActions>
              {passwordMessage && (
                <Alert variant="info" sx={{ mt: 4 }}>
                  {passwordMessage}
                </Alert>
              )}
            </Form>
          )}
        </Formik>
      </BorderWrapper>
    </Container>
  )
}

export default UserProfile
