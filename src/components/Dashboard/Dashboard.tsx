import React from 'react'

export const Dashboard = () => {
  return <div>Dashboard</div>
}

// import React, { Fragment } from "react";
// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { useAuth } from "../../providers/AuthProvider";
// import { firestore } from "../../config/firebase";

// const useStyles = makeStyles(() => ({
//   dashboardTitle: {
//     marginTop: "0px",
//     padding: "0px",
//   },
// }));

// export const Dashboard = (): JSX.Element => {
//   const classes = useStyles();
//   const { user } = useAuth();
//   const db = firestore;
//   db.collection("username")
//     .get()
//     .then((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });

//   return (
//     <Fragment>
//       <Typography className={classes.dashboardTitle}>
//         Dashboard {user?.email}
//       </Typography>
//     </Fragment>
//   );
// };
