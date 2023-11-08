export interface UserData {
  data: UserResponseData;
}

export interface UserResponseData {
  insert_users: UserResponseValues;
}

export interface UserResponseValues {
  returning: UserDetails[];
}

export interface UserDetails {
  displayName: string | null;
  email: string;
  password: string | null;
  repeatPassword: string | null;
}
