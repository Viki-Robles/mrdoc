import { useMemo } from "react";
import { useGqlQuery } from "../../hooks/useGqlQuery/useGqlQuery";
import { GET_DENTIST_DATA, GET_EYE_CARE_DATA } from "../../graphql/treatments";
import {
  TreatmentDentistData,
  TreatmentEyeCareData,
} from "../../types/treatments";

/**
 * @name useFetchData this hook is fetching the dental and eye care data
 * @description
 */
export const useFetchData = () => {
  const getDentistData = useGqlQuery<TreatmentDentistData>(
    "getDentistData",
    GET_DENTIST_DATA
  );
  const getEyeCareData = useGqlQuery<TreatmentEyeCareData>(
    "getEyeCareData",
    GET_EYE_CARE_DATA
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
