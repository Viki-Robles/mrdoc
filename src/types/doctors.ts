export interface DoctorsDataModel {
  doctors: Doctor[]
}

export interface Doctor {
  first_name: string
  last_name: string
  languages: LanguageDataModel
  doctor_id: string
  contact_number: number
  nationality: string
  profession: string
  details: string
  avatar?: string
}

export interface LanguageDataModel {
  language_name: string
  language_id: string
}
