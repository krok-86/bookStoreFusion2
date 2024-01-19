export interface IRegistrationForm {
    id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    dob?: Date;
  }
  export interface IRegistrationFormData {
    payload?: {
      data: string;
    };
    userData: IRegistrationForm;
    token?: string;
  }
  export interface IRejectValue {
    data: string;
  }
  export interface IBook {
    title: string,
    author: string,
    rate: string,
    price: string,
    image: string,
  }