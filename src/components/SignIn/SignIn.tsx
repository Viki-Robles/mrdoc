import React, { useState } from "react";
import { Input, Button, Grid, Text, ThemeUIStyleObject, Alert } from "theme-ui";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DASHBOARD_PAGE_PATH, SIGN_UP_PAGE_PATH } from "../../config/paths";
import { useAuth } from "../../providers/AuthProvider";
import { FormGroup } from "../../components/FormGroup/FormGroup";
import { FormWrapper } from "../FormWrapper/FormWrapper";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface SignInProps {
  sx?: ThemeUIStyleObject;
}

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(8).max(200),
});

export default function SignIn({ sx }: SignInProps): JSX.Element {
  const { signIn } = useAuth();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const history = useHistory();

  return (
    <FormWrapper title="Welcome back" sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values: SignInFormValues) => {
          setFormSubmitting(true);
          try {
            const res = await signIn(values.email, values.password);
            const user = res.user;
            const q = query(
              collection(db, "users"),
              where("uid", "==", user.uid),
            );
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
              await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
              });
            }
            history.push(DASHBOARD_PAGE_PATH);
          } catch (error: unknown) {
            let errorMessage = "error.unknown";
            if (typeof error === "string") {
              errorMessage = error.toUpperCase();
            } else if (error instanceof Error) {
              errorMessage = error.message;
            }
            setFormError(errorMessage);
            setFormSubmitting(false);
          }
        }}
        validationSchema={SignInSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label="You email address" name="email">
              <Input
                sx={{ borderColor: "rgb(209, 218, 230)" }}
                {...getFieldProps("email")}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{ width: "400px", borderColor: "rgb(209, 218, 230)" }}
                {...getFieldProps("password")}
                type="password"
                id="password"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1 }} variant="buttons.primary">
                Log in
              </Button>
              <Link to={SIGN_UP_PAGE_PATH}>
                <Text
                  sx={{
                    display: "inline-block",
                    textDecoration: "none",
                    fontSize: 2,
                    color: "blue.900",
                  }}
                >
                  Dont have an account? Please Sign up here.
                </Text>
              </Link>
            </Grid>
            <br />
            {formError && <Alert variant="error">{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}
