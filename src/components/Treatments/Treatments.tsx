import React, { Fragment, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Treatment } from "../Treatment/Treatment";
import { useFetchData } from "../../hooks/useFetchData/useFetchData";

export const Treatments = (): JSX.Element => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const [showEyeCare, setShowEyeCare] = useState<boolean>(false);
  const { dentistData } = useFetchData();

  return (
    <Fragment>
      <Button onClick={() => setIsVisible(!visible)}>Dentist</Button>
      <Button onClick={() => setShowEyeCare(!showEyeCare)}>Eye Care</Button>
      {visible && (
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={2}>
          {dentistData?.map(({ name, price, location, category, id }) => {
            return (
              <Treatment
                key={id}
                name={name}
                price={price}
                location={location}
                category={category}
              />
            );
          })}
        </Box>
      )}
    </Fragment>
  );
};
