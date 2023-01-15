import { useGqlQuery } from '../useGqlQuery/useGqlQuery'
import { GET_DOCTOR_BY_LANGUAGE_NAME } from '../../graphql/doctors'
import { Doctor } from '../../types/doctors'
import { UseQueryResult } from 'react-query'

interface Response {
  doctors: Doctor[]
}

interface QueryVariables {
  language_name: string
}

/**
 * @name useFetchDoctorsByNationality
 * @description This hook is fetching doctors by their nationality
 */
export const useFetchDoctorsByNationality = (
  language_name: string,
): UseQueryResult<Response, Error> => {
  return useGqlQuery<Response, QueryVariables>(
    ['language_name', language_name],
    GET_DOCTOR_BY_LANGUAGE_NAME,
    {
      language_name,
    },
  )
}
