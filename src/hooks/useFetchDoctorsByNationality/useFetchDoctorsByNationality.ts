import { useGqlQuery } from '../useGqlQuery/useGqlQuery'
import { GET_DOCTORS_NY_NATIONALITY } from '../../graphql/doctors'
import { Doctor } from '../../types/doctors'
import { UseQueryResult } from 'react-query'

interface Response {
  doctors: Doctor[]
}

interface QueryVariables {
  nationality: string
}

/**
 * @name useFetchDoctorsByNationality
 * @description This hook is fetching doctors by their nationality
 */
export const useFetchDoctorsByNationality = (
  nationality: string,
): UseQueryResult<Response, Error> => {
  return useGqlQuery<Response, QueryVariables>(
    ['nationality', nationality],
    GET_DOCTORS_NY_NATIONALITY,
    {
      nationality,
    },
  )
}
