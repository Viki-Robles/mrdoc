import React, { ReactNode } from 'react' import { Box } from 'theme-ui'; export
interface
WrapperContainerProps { // children: ReactNode } export const
WrapperContainer
= ({ children }:
WrapperContainerProps): JSX.Element => { return (
<Box>
  <Box>WrapperContainer</Box>
</Box>
) }