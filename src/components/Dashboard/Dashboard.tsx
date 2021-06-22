import React from "react";
import { Typography } from "@material-ui/core";
import { useAuth } from "../../providers/AuthProvider";
import { BorderWrapper } from "../BorderWrapper/BorderWrapper";

export const Dashboard = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <BorderWrapper>
      <Typography align="left" variant="h4">
        Hi {user?.email}
      </Typography>
    </BorderWrapper>
  );
};
