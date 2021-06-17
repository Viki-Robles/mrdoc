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
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(5),
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
    marginTop: theme.spacing(2),
    textAlign: "center",
    marginBottom: theme.spacing(2),
    color: "#0f6fde",
    fontFamily: "Karla,Helvetica,sans-serif",
    fontWeight: 600,
    letterSpacing: "normal",
  },
  loginLink: {
    color: "#0f6fde",
  },

  forgotPassword: {
    color: "#0f6fde",
    textAlign: "right",
  },
}));

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const history = useHistory();

  async function handleSubmit(
    e: React.MouseEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (emailRef?.current?.value && passwordRef?.current?.value) {
      {
        try {
          setError("");
          setLoading(true);
          await signIn(emailRef.current.value, passwordRef.current.value);
          history.push("/dashboard");
        } catch {
          setError("Failed to sign in. Incorrect email or password.");
        }
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
        <Typography
          component="h1"
          variant="h5"
          className={classes.signUpHeader}
        >
          Welcome back to mediPal
        </Typography>
        {error && (
          <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <TextField
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
          </Grid>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container alignItems="flex-end" direction="column">
            <Grid>
              <Link
                href="/sign-up"
                variant="body2"
                className={classes.loginLink}
              >
                Need an account?
              </Link>
            </Grid>
            <Grid>
              <Link
                href="/forgot-password"
                variant="body2"
                className={classes.forgotPassword}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}
