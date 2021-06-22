import React, { ReactNode } from "react";
import { Container, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "40px",
    backgroundColor: "#E7F0FA",
    height: "80vh",
  },
}));

export interface BorderWrapperProps {
  children?: ReactNode;
}

export const BorderWrapper = ({
  children,
}: BorderWrapperProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box>{children}</Box>
    </Container>
  );
};
