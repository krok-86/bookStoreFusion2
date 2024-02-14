export interface IRegistrationForm {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string;
  dob?: Date;
  confirmNewPassword?: string;
  avatarImg?: string;
};
export interface IRegistrationFormData {
  payload?: {
    data: string;
  };
  userData: IRegistrationForm;
  token?: string;
};
export interface IBook {
  id?: number;
  title?: string;
  description?: string;
  picture?: string;
  rating?: number;
  price?: number;
  dateOfIssue?: Date;
  authorId?: number;
  genreId?: number;
};
export type BookData = {
  data: IBook;
};
export interface IEditBook {
  id: number;
  rating: number;
}
export type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
  remember?: string; //fix?
  dob?: Date;
  confirm?: string;
};
export type UserData = {
  data: IRegistrationForm;
};
export interface IEditUser {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string;//fix ?
};
export interface IRejectValue {
  data: string;
};
export type FormValues = {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string;
};
// export interface IBook {
//   title: string,
//   author: string,
//   rate: string,
//   price: string,
//   image: string,
// };
export interface INewUser {
  isRegistration: boolean;
};