import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  TextField,
  Avatar,
  makeStyles,
  Button,
  Link,
  Container,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useAuth } from "../../providers/AuthProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lock: {
    margin: theme.spacing(1),
    backgroundColor: "#0f6fde",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    textTransform: "none",
  },
  formControlLabel: {
    fontSize: "0.3rem",
  },
  signUpHeader: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
    color: "#0f6fde",
    fontFamily: "Karla,Helvetica,sans-serif",
    fontWeight: 400,
    letterSpacing: "normal",
    fontSize: "20px",
  },
  loginLink: {
    color: "#0f6fde",
  },
}));

export default function Signup(): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const history = useHistory();
  const { signUp } = useAuth();

  async function handleSubmit(
    e: React.MouseEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setLoading(true);
    if (
      passwordRef?.current?.value &&
      emailRef?.current?.value &&
      repeatPasswordRef?.current?.value
    ) {
      if (passwordRef.current.value !== repeatPasswordRef.current.value) {
        setLoading(false);
        return setError("Passwords do not match");
      }
      try {
        setError("");
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.push("/");
      } catch (error) {
        console.log("emailL:", emailRef.current.value);
        setError(error.message);
        setLoading(false);
      }
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.lock}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signUpHeader}>Sign up</Typography>
        {error}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                inputRef={firstNameRef}
                label="First Name:"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                inputRef={lastNameRef}
                fullWidth
                value={lastName}
                label="Last Name:"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={email}
                type="email"
                id="email"
                inputRef={emailRef}
                fullWidth
                label="Email Address:"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputRef={passwordRef}
                fullWidth
                id="password"
                name="password"
                label="Password:"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                inputRef={repeatPasswordRef}
                id="repeatPassword"
                fullWidth
                name="password"
                label="Repeat password:"
                type="repeat password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href="/sign-in"
                variant="body2"
                className={classes.loginLink}
              >
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
