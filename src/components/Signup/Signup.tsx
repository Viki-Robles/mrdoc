import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
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
import { firestore } from "../../config/firebase";
import { SIGN_IN_PAGE_PATH } from "../../config/paths";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "45px",
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
  loginLink: {
    color: "#0f6fde",
  },
  welcome: {
    color: "#0f6fde",
    fontSize: "25px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));

export function SignUp(): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
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
    const db = firestore;

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
        const userRef = db.collection("users").add({
          firstName: firstName,
          lastName: lastName,
        });
        const usernameRef = db.collection("username").add({
          username: username,
        });
        setFirstName(firstName);
        setLastName(lastName);
        setUsername(username);
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.push("/dashboard");
      } catch (error) {
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
        <Typography className={classes.welcome}>Welcome to medipal</Typography>
        {error}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                inputRef={usernameRef}
                fullWidth
                value={username}
                label="Username:"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
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
                href={SIGN_IN_PAGE_PATH}
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
