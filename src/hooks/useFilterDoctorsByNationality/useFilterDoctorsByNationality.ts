import { Doctor } from '../../types/doctors'
import { nationality } from '../../types/nationality'

export interface UseFilterDoctorsByNationalityModel {
  doctors: Doctor[]
}

/**
 * @name useFilterDoctorsByNationality
 * @description
 */
export const useFilterDoctorsByNationality = ({
  doctors,
}): UseFilterDoctorsByNationalityModel[] => {
  const filteredArray = []
  // loop through the array and check if the array includes the nationality dictionairy
  return filteredArray
}
