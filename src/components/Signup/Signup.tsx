/* eslint-disable no-debugger */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { Input, ThemeUIStyleObject, Grid, Button, Text, Alert } from "theme-ui";
import { Form, Formik } from "formik";
import { FormGroup } from "../FormGroup/FormGroup";
import { DASHBOARD_PAGE_PATH, SIGN_IN_PAGE_PATH } from "../../config/paths";
import { FormWrapper } from "../FormWrapper/FormWrapper";
import { useInsertUsers } from "../../hooks/useInsertUsers/useInsertUsers";
import { queryClient } from "../../App";
import { SignUpSchema } from "./Signup.form";

interface SignUpFormValues {
  password: string;
  repeatPassword: string;
  displayName: string | null;
  email: string;
  uid?: string | null;
}

export interface SignUpProps {
  sx?: ThemeUIStyleObject;
}

export default function SignUp({ sx }: SignUpProps): JSX.Element {
  const { signUp } = useAuth();
  const [formError, setFormError] = useState<string>("");
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const history = useHistory();

  const updateHsuraUsers = useInsertUsers({
    onSuccess: () => {
      queryClient.invalidateQueries("user-info-updated-on-hasura");
    },
  });

  return (
    <FormWrapper title="Create account" sx={{ ...sx }}>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={async (values: SignUpFormValues) => {
          setFormSubmitting(true);

          try {
            debugger;
            await signUp(values.displayName, values.email, values.password);
            console.log("values:", values);
            await updateHsuraUsers.mutate({
              email: values.email,
              displayName: values.displayName,
              password: values.password,
              repeatPassword: values.repeatPassword,
            });
            console.log("values:", updateHsuraUsers.variables?.email);
            history.push(DASHBOARD_PAGE_PATH);
          } catch (error) {
            console.log(error);
            setFormError(formError);
            setFormSubmitting(false);
          }
        }}
        validationSchema={SignUpSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label="Username" name="displayName">
              <Input
                sx={{ borderColor: "rgb(209, 218, 230)" }}
                {...getFieldProps("displayName")}
                id="displayName"
              />
            </FormGroup>
            <FormGroup label="Email address" name="email">
              <Input
                sx={{ borderColor: "rgb(209, 218, 230)" }}
                {...getFieldProps("email")}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{
                  borderColor: "rgb(209, 218, 230)",
                }}
                {...getFieldProps("password")}
                type="password"
                id="password"
              />
            </FormGroup>
            <FormGroup label="Repeat password" name="repeatPassword">
              <Input
                sx={{
                  borderColor: "rgb(209, 218, 230)",
                }}
                {...getFieldProps("repeatPassword")}
                type="password"
                id="repeatPassword"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1 }} variant="buttons.primary">
                Sign up
              </Button>
              <Link to={{ pathname: SIGN_IN_PAGE_PATH }}>
                <Text
                  sx={{
                    display: "inline-block",
                    textDecoration: "none",
                    textAlign: "center",
                    margin: "0 auto",
                    fontSize: 2,
                    color: "brand",
                  }}
                >
                  Do you already have an account? Please login in here.
                </Text>
              </Link>
            </Grid>
            {formError && <Alert variant="error">{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}
