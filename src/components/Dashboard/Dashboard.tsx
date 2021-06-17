import React from "react";
import {
  Grid,
  Box,
  TextField,
  makeStyles,
  Button,
  Link,
  Container,
  Typography,
} from "@material-ui/core";
import { useAuth } from "../../providers/AuthProvider";

export const Dashboard = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <Box>
      <Box>Hi {user?.email} Dashboard</Box>
    </Box>
  );
};
