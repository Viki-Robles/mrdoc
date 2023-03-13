export interface DoctorsDataModel {
  doctors: Doctor[];
}

export interface Doctor {
  first_name: string;
  last_name: string;
  languages: string;
  doctor_id: string;
  contact_number: number;
  nationality: string;
  profession: string;
  details: string;
  avatar?: string;
}

export interface Languages {
  language_name: string;
  language_id: string;
}
