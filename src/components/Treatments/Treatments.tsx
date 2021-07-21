import React, { Fragment, useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { Treatment } from "../Treatment/Treatment";
// import { DENTIST_CATEGORY } from "../../utils/graphql/clinics";

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

export const DENTIST_CATEGORY = gql`
  mutation {
    update_clinics(
      where: { category: { _eq: "Dentist" } }
      _set: { category: "Dentist" }
    ) {
      affected_rows
      returning {
        category
        location
        id
        name
      }
    }
  }
`;
export interface TreatmentsProps {
  location: string;
}

export const Treatments = (): JSX.Element => {
  const [getClinics, { data, loading, error }] = useMutation(DENTIST_CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <Fragment>
      <Button onClick={() => getClinics()}>Dentist</Button>
      {data && (
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
      )}
    </Fragment>
  );
};
