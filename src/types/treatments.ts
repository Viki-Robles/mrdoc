export interface TreatmentDataModel {
  name: string;
  category: string;
  location: string;
  price: number;
  id: number;
}

export interface TreatmentDentistData {
  dentist: TreatmentDataModel[];
}

export interface TreatmentEyeCareData {
  eyeCare: TreatmentDataModel[];
}
