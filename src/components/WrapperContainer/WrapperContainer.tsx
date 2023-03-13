import React, { ReactNode } from "react";
import { Box } from "theme-ui";

interface WrapperContainerProps {
  children: ReactNode;
}

const WrapperContainer = ({ children }: WrapperContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        mr: 4,
        mt: 5,
        ml: 2,
        mb: 5,
        borderRadius: "2%",
        border: "1px solid",
        borderColor: "#f3f8ff",
        backgroundColor: "#ecf2ff",
        padding: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default WrapperContainer;
