export interface TreatmentDataModel {
  name: string;
  category: string;
  location: string;
  price: number;
  id: number;
}

export interface TreatmentData {
  dentist: TreatmentDataModel[];
}
