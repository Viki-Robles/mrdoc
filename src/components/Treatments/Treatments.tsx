import React, { Fragment, useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import { Treatment } from "../Treatment/Treatment";

export const GET_TREATMENTS = gql`
  query {
    clinics {
      location
      name
      price
      subcategory
      id
    }
  }
`;

export const GET_CATEGORY_DENTIST = gql`
  query {
    clinics(where: { category: { _eq: "Dentist" } }) {
      category
      location
      name
      price
      id
    }
  }
`;
export interface TreatmentsProps {
  location: string;
}

export const Treatments = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_TREATMENTS);
  const [showCategory, setShowCategory] = useState<boolean>(false);

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <Fragment>
      <Button onClick={() => setShowCategory(!showCategory)}>Dentist</Button>

      <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={2}>
        {data?.clinics?.map(({ name, id, price, location, subcategory }) => {
          return (
            <Treatment
              name={name}
              id={id}
              price={price}
              location={location}
              key={id}
              subcategory={subcategory}
            />
          );
        })}
      </Box>
    </Fragment>
  );
};
