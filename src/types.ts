export interface IRegistrationForm {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  dob?: Date;
  // newPassword?: string;
  confirmNewPassword?: string;
  avatarImg?: string;
}
export interface IRegistrationFormData {
  payload?: {
    data: string;
  };
  userData: IRegistrationForm;
  token?: string;
}
export type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
  remember?: string; //fix?
  dob?: Date;
  confirm?: string;
  // newPassword?: string;
};
export type UserData = {
  data: IRegistrationForm;
}
export interface IEditUser {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;//fix ?
}
export interface IRejectValue {
  data: string;
}
export type FormValues = {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
};
export interface IBook {
  title: string,
  author: string,
  rate: string,
  price: string,
  image: string,
}
export interface INewUser {
  isRegistration: boolean;
}