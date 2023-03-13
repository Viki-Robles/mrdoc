export interface TreatmentDataModel {
  name: string | null;
  location: string;
  price: number;
  id: string;
  category: string;
  treatment_id: string;
}

export interface TreatmentDentistData {
  dentist: TreatmentDataModel[];
}

export interface TreatmentEyeCareData {
  eyeCare: TreatmentDataModel[];
}
