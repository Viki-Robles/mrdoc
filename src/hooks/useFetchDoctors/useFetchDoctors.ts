import { useMemo } from "react";
import { useGqlQuery } from "../../hooks/useGqlQuery/useGqlQuery";
import { GET_ALL_DOCTORS } from "../../graphql/doctors";
import { DoctorsDataModel } from "../../types/doctors";

/**
 * @name useFetchDoctors this hook is fetching the doctors data
 * @description
 */

export const useFetchDoctors = (): Record<string, any> => {
  const getDoctorsData = useGqlQuery<DoctorsDataModel>(
    "getDoctorsData",
    GET_ALL_DOCTORS,
  );

  const doctorsData = useMemo(
    () => getDoctorsData?.data?.doctors,
    [getDoctorsData],
  );
  return { doctorsData };
};
