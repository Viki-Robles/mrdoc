export interface DoctorsDataModel {
  doctors: Doctor[]
}

export interface Doctor {
  first_name: string
  last_name: string
  skill: SkillDataModel
  doctor_id: string
  contact_number: number
  nationality: string
  profession: string
}

export interface SkillDataModel {
  skill_group: string
  skill_id: string
  skill_name: string
}
