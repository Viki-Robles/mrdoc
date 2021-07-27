import React, { Fragment, useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { Treatment } from "../Treatment/Treatment";
import { useFetchData } from "../../hooks/useFetchData/useFetchData";

export const Treatments = (): JSX.Element => {
  const [showDental, setShowDental] = useState<boolean>(true);
  const [showEyeCare, setShowEyeCare] = useState<boolean>(true);
  const { dentistData, eyeCareData } = useFetchData();

  const toggleDental = () => {
    setShowDental(showDental);
    setShowEyeCare(!showEyeCare);
  };

  const toggleEyeCare = () => {
    setShowDental(!showDental);
    setShowEyeCare(showEyeCare);
  };

  return (
    <Fragment>
      <Button onClick={toggleDental}>Dentist</Button>
      <Button onClick={toggleEyeCare}>Eye Care</Button>
      {showDental && (
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
      {showEyeCare && (
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={2}>
          {eyeCareData?.map(({ name, price, location, category, id }) => {
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
