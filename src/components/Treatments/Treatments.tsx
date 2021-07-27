import React, { Fragment, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Treatment } from "../Treatment/Treatment";
import { useFetchData } from "../../hooks/useFetchData/useFetchData";

export const Treatments = (): JSX.Element => {
  const [showDental, setShowDental] = useState<boolean>(false);
  const [showEyeCare, setShowEyeCare] = useState<boolean>(false);
  const { dentistData, eyeCareData } = useFetchData();

  // const switchResult = () => {
  //   if (!showDental) {
  //     setShowDental(!showDental);
  //     setShowEyeCare(showEyeCare);
  //   }
  //   if (!showEyeCare) {
  //     setShowEyeCare(!showEyeCare);
  //     setShowDental(showDental);
  //   }
  // };

  return (
    <Fragment>
      <Button onClick={() => setShowDental(!showDental)}>Dentist</Button>
      <Button onClick={() => setShowEyeCare(!showEyeCare)}>Eye Care</Button>
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
