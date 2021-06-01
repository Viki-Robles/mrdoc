import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button, Link } from "@material-ui/core";

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
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const repeatPasswordRef = React.useRef<HTMLInputElement>(null);
  const firstnameRef = React.useRef<HTMLInputElement>(null);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.lock}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signUpHeader}>Sign up</Typography>

        <form className={classes.form}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                ref={firstnameRef}
                label="First Name:"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={lastName}
                label="Last Name:"
                name="brandName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={email}
                type="email"
                id="email"
                ref={emailRef}
                fullWidth
                label="Email Address:"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                ref={passwordRef}
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
                ref={repeatPasswordRef}
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
              <Link href="/login" variant="body2" className={classes.loginLink}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
