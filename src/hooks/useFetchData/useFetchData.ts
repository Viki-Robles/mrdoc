import { useMemo } from "react";
import { gql } from "graphql-request";
import { useGqlQuery } from "../../hooks/useGqlQuery/useGqlQuery";
import { TreatmentData } from "../../types/treatment";

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

/**
 * @name useFetchData
 * @description
 */
export const useFetchData = () => {
  const getDentistData = useGqlQuery<TreatmentData>(
    "getDentistData",
    GET_DENTIST_DATA
  );
  const getEyeCareData = useGqlQuery<TreatmentData>(
    "getEyeCareData",
    GET_EYE_CARE
  );
  const getAllData = useGqlQuery<TreatmentData>("getAllData", GET_TREATMENTS);

  const dentistData = useMemo(
    () => getDentistData?.data?.dentist,
    [getDentistData]
  );

  const eyeCareData = useMemo(
    () => getEyeCareData?.data?.dentist,
    [getEyeCareData]
  );
  return {
    dentistData,
    eyeCareData,
  };
};
