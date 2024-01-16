export interface IRegistrationForm {
    name?: string;
    email?: string;
    password?: string;
    id?: string;
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