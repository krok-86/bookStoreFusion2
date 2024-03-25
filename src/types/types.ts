import type { MutableRefObject } from 'react';

export interface IRegistrationForm {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string;
  dob?: Date;
  confirmNewPassword?: string;
  avatarImg?: string;
  favorite?: IBook[];
  cart?: IBook[];
}
export interface IRegistrationFormData {
  payload?: {
    data: string;
  };
  userData: IRegistrationForm;
  token?: string;
}
export interface IBookCardSmall {
  book?: IBook;
}
export interface IBook {
  id?: number;
  title?: string;
  description?: string;
  picture?: string;
  rating?: number;
  price?: number;
  dateOfIssue?: Date;
  userId?: number;
  author?: {
    id: number;
    name: string;
  };
  genreId?: number;
}
export type BookDataType = {
  data: IBook;
};
export type BooksDataType = {
  data: IBook[];
};
export type InitialAuthStateType = {
  data: IRegistrationForm | null;
  books: IBook[];
  status: 'loading' | 'loaded' | 'error';
};
export interface IEditBook {
  id: number;
  rating: number;
  userId?: number;
}
export type GenreType = {
  id: number;
  title: string;
};
export type SelectorType = {
  label: string;
  value: number;
};
export type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
  remember?: string; // fix?
  dob?: Date;
  confirm?: string;
};
export type UserDataType = {
  data: IRegistrationForm;
};
export interface IEditUser {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string; // fix ?
}
export interface IRejectValue {
  data: string;
}
export type FormValuesType = {
  id?: number;
  fullName?: string;
  email?: string;
  password?: string;
};
export interface INewUser {
  isRegistration: boolean;
}
export type PostType = {
  id?: number;
  postText?: string;
  userId?: number;
  bookId?: number;
  createdAt?: Date;
};

export interface IPost {
  id?: number;
  postText?: string;
  created_at?: Date;
  book: {
    id: number;
    title: string;
    description: string;
    picture: string;
    rating: number;
    price: number;
    dateOfIssue: Date;
    authorId: number;
    genreId: number;
  };
  user: {
    id: number;
    fullName: string;
    email: string;
    dob: Date;
    password: string;
    avatarImg: string;
  };
}
export interface IPostDescription {
  post?: IPost;
}
export interface IPostList {
  posts?: IPost[];
}
export type PostDataType = {
  data: IPost;
};
export type BannerType = {
  bookRef: MutableRefObject<null>;
};
export type BookListType = {
  book: IBook;
};
export type CartListType = {
  book: CartItemType;
};
export type CartItemType = {
    book: IBook;
    countBook: number;
};
export type CartType = {
  books: CartItemType[];
  cartBookAmount: number;
  summ: number;
};
export type CartDataType = {
  data: CartType;
};

export type CartItemDataType = {
  data: CartItemType;
};
