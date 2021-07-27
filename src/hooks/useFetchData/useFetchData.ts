import { useMemo } from "react";
import { gql } from "graphql-request";
import { useGqlQuery } from "../../hooks/useGqlQuery/useGqlQuery";
import {
  TreatmentDentistData,
  TreatmentEyeCareData,
} from "../../types/treatments";

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
      id
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

/**
 * @name useFetchData
 * @description
 */
export const useFetchData = () => {
  const getDentistData = useGqlQuery<TreatmentDentistData>(
    "getDentistData",
    GET_DENTIST_DATA
  );
  const getEyeCareData = useGqlQuery<TreatmentEyeCareData>(
    "getEyeCareData",
    GET_EYE_CARE
  );

  const dentistData = useMemo(
    () => getDentistData?.data?.dentist,
    [getDentistData]
  );

  const eyeCareData = useMemo(
    () => getEyeCareData?.data?.eyeCare,
    [getEyeCareData]
  );
  return {
    dentistData,
    eyeCareData,
  };
};
