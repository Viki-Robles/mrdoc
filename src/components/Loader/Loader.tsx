import React from "react";
import ReactLoading from "react-loading";
import { Box } from "theme-ui";

const Loader = (): JSX.Element => {
  return (
    <Box>
      <ReactLoading
        type="spinningBubbles"
        color="black"
        height={"20%"}
        width={"20%"}
      />
    </Box>
  );
};

export default Loader;
