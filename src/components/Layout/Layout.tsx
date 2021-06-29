import React, { ReactNode } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box } from "@material-ui/core";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box display="flex">
      <NavBar />
      <Box>{children}</Box>
    </Box>
  );
};
