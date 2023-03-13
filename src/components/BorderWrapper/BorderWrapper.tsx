import React, { ReactNode } from "react";
import { ThemeUIStyleObject, Box, Heading, Text, Flex } from "theme-ui";

export interface BorderWrapperProps {
  sx?: ThemeUIStyleObject;
  children: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  information?: string;
}

export default function BorderWrapper({
  sx,
  title,
  children,
  subtitle,
  information,
  ...rest
}: BorderWrapperProps): JSX.Element {
  return (
    <Box
      sx={{
        boxShadow: "lg",
        bg: "background",
        p: 5,
        borderRadius: "lg",
        "@media print": {
          pageBreakInside: "avoid",
          pageBreakBefore: "always",
        },
        ...sx,
      }}
      {...rest}
    >
      {title || subtitle ? (
        <Box sx={{ mb: 5 }} className="borderWrapper-titlesContainer">
          {title ? (
            <Flex
              sx={{ alignItems: "center" }}
              className="borderWrapper-headingContainer"
            >
              <Heading variant="subHeading" sx={{ fontSize: 6, mb: 0 }}>
                {title}
              </Heading>
            </Flex>
          ) : null}
          {subtitle ? (
            <Text as="div" variant="subduedSubHeading" sx={{ mb: 0, mt: 1 }}>
              {subtitle}
            </Text>
          ) : null}
        </Box>
      ) : null}
      {children}
    </Box>
  );
}
