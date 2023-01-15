import { gql } from 'graphql-request'

export const GET_ALL_DOCTORS = gql`
  query getAllDoctors {
    doctors {
      contact_number
      doctor_id
      first_name
      languages
      last_name
      nationality
      profession
      details
      avatar
    }
    languages {
      language_id
      language_name
    }
  }
`

export const GET_DOCTOR_BY_LANGUAGE_NAME = gql`
doctors(where: {doctors_by_language: {language_name: {_eq: $language_name}}}) {
  first_name
  last_name
  nationality
  profession
}
`

export const GET_DOCTOR_BY_ID = gql`
  query getDoctorById($doctor_id: String!) {
    doctors(where: { doctor_id: { _eq: $doctor_id } }) {
      doctor_id
      first_name
      last_name
      details
      nationality
      profession
      languages
      contact_number
    }
  }
`
export const GET_DOCTORS_NY_NATIONALITY = gql`
  query getDoctorsByNationality($nationality: String!) {
    doctors(where: { nationality: { _eq: $nationality } }) {
      contact_number
      doctor_id
      first_name
      last_name
      nationality
      profession
      languages
    }
  }
`
