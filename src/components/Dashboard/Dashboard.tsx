import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../providers/AuthProvider";
import { firestore } from "../../config/firebase";

const useStyles = makeStyles((theme) => ({
  dashboardTitle: {
    marginTop: "80px",
    padding: "40px",
  },
}));

export const Dashboard = (): JSX.Element => {
  const classes = useStyles();
  const { user } = useAuth();
  const db = firestore;
  db.collection("username")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });

  return (
    <Fragment>
      <Typography className={classes.dashboardTitle}>
        Hi {user?.email}
      </Typography>
    </Fragment>
  );
};
