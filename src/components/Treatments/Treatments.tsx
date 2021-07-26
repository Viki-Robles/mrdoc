import React, { Fragment, useState, useMemo } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { gql } from "graphql-request";
import { Treatment } from "../Treatment/Treatment";
import { useGqlQuery } from "../../hooks/useGqlQuery/useGqlQuery";
import { useQueryClient, useQuery } from "react-query";
import { TreatmentModel } from "../../types/treatment";

export const GET_TREATMENTS = gql`
  query {
    dentist(where: { category: { _eq: "Root Canal" } }) {
      category
      location
      name
      price
    }
    eyeCare(where: { category: { _eq: "Cataract Surgery" } }) {
      category
      location
      name
      price
    }
  }
`;

export const GET_EYE_CARE = gql`
  query {
    eyeCare {
      category
      location
      name
      price
    }
  }
`;

export const GET_DENTIST_DATA = gql`
  query {
    dentist {
      category
      location
      name
      price
    }
  }
`;

export const GET_ROOT_CANAL_TREATMENT = gql`
  query {
    dentist(where: { category: { _eq: "Root Canal" } }) {
      location
      name
      price
      category
    }
  }
`;

export interface TreatmentData {
  dentist: TreatmentModel[];
}
export const Treatments = (): JSX.Element => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const getDentistData = useGqlQuery<TreatmentData>(
    "getDentistData",
    GET_DENTIST_DATA
  );
  const dentistData = useMemo(
    () => getDentistData?.data?.dentist,
    [getDentistData]
  );
  console.log(getDentistData, "data");

  return (
    <Fragment>
      <Button onClick={() => setIsVisible(!visible)}>Dentist</Button>
      {/* 
      <Button>Eye Care</Button> */}
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
