import React from "react";
import { Box, Flex, Text } from "theme-ui";

interface SmallWrapperProps {
  data: any;
}

function SmallWrapper({ data }: SmallWrapperProps): JSX.Element {
  return (
    <Flex
      sx={{
        display: "flex",
        width: "250px",
        height: "60px",
        border: "transparent",
        borderRadius: 6,
        bg: "#343B96",
        padding: 3,
        mb: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          color: "#5165CF",
          fontSize: 5,
          fontWeight: "bold",
          borderRadius: 6,
          bg: "bright",
        }}
      >
        {data}
      </Box>
      <Text
        sx={{
          alignSelf: "center",
          fontWeight: "semibold",
          fontSize: 5,
          color: "bright",
          ml: 2,
        }}
      >
        Doctors
      </Text>
    </Flex>
  );
}

export default SmallWrapper;
