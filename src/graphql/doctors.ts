import { gql } from 'graphql-request'

export const GET_ALL_DOCTORS = gql`
  query getAllDoctors {
    doctors {
      first_name
      last_name
      skill {
        skill_group
        skill_id
        skill_name
      }
      doctor_id
      contact_number
      nationality
      profession
    }
  }
`

export const GET_DOCTOR_BY_SKILL_NAME = gql`
  query getDoctorBySkillName($skill_name: String!) {
    doctors(where: { skill: { skill_name: { _eq: $skill_name } } }) {
      first_name
      last_name
      nationality
      profession
      contact_number
      doctor_id
      skill {
        skill_name
      }
    }
  }
`

export const GET_DOCTOR_BY_ID = gql`
  query getDoctorById($doctor_id: String!) {
    doctors(where: { doctor_id: { _eq: $doctor_id } }) {
      doctor_id
      first_name
      last_name
      nationality
      profession
      skill {
        skill_name
      }
      contact_number
    }
  }
`
