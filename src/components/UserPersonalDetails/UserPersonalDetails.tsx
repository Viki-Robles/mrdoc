import React from 'react'
import { Box, Flex, Grid, Button } from 'theme-ui'

export const UserPersonalDetails = (): JSX.Element => {
  return (
    <Flex>
      <Box>Photo</Box>
      <Grid>
        <Button variant="buttons.update">Update Photo</Button>
        <Button variant="buttons.delete">Delete</Button>
      </Grid>
    </Flex>
  )
}
