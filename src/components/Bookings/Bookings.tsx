import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";

export interface BookingsProps {
  children: ReactNode;
}

export const Bookings = ({ children }: BookingsProps): JSX.Element => {
  return (
    <Box>
      <Box>Bookings</Box>
      <Box>{children}</Box>
    </Box>
  );
};
