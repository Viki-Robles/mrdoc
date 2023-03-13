import React, { Fragment, ReactNode } from "react";
import { Box, Text, Flex } from "theme-ui";

export interface HeroBarProps {
  children: ReactNode;
}

export const HeroBar = (): JSX.Element => {
  return (
    <Fragment>
      <Box
        sx={{ backgroundColor: "#e7effc", width: "100%", height: "40px" }}
      ></Box>
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#e7effc",
        }}
      >
        <Text
          sx={{
            color: "#050A30",
            fontSize: 6,
            fontWeight: "semibold",
            margin: "1rem 1rem",
          }}
        >
          Mr.Doc
        </Text>
        <Text></Text>
        <Text></Text>
      </Flex>
    </Fragment>
  );
};
