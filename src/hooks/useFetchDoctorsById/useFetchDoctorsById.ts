import { useGqlQuery } from '../useGqlQuery/useGqlQuery'
import { GET_DOCTOR_BY_ID } from '../../graphql/doctors'
import { Doctor } from '../../types/doctors'
import { UseQueryResult } from 'react-query'

interface Response {
  doctors: Doctor[]
}

interface QueryVariables {
  doctor_id: string
}

/**
 * @name useFetchDoctorsById
 * @description This hook fetches the doctor by id
 */
export const useFetchDoctorsById = (
  doctor_id: string,
): UseQueryResult<Response, Error> => {
  return useGqlQuery<Response, QueryVariables>(
    ['doctors', doctor_id],
    GET_DOCTOR_BY_ID,
    {
      doctor_id,
    },
  )
}
