import axiosInstance from ".";
import Qs from "qs";
import {
  GenreType,
  IBook,
  IEditBook,
  IEditUser,
  IPost,
  IRegistrationForm,
  IRegistrationFormData,
  PostType,
} from "../types/types";

const userUrl = "users/";
const userRegUrl = "users/registration";
const userAuthUrl = "users/authorization";
const userAuthMeUrl = "users/authorization/me";

const genreUrl = "/genres";

const bookUrl = "books";
const bookRecomUrl = "books/recommended";

const postUrl = "posts";

//user block

export const postUserReg = (body: IRegistrationForm) => {
  return axiosInstance.post<IRegistrationFormData>(userRegUrl, body, {
    // fix reva
    paramsSerializer: function (body) {
      return Qs.stringify(body, { skipNulls: true });
    },
  });
};

export const postUserAuth = (body: IRegistrationForm) => {
  return axiosInstance.post<IRegistrationFormData>(userAuthUrl, body, {
    paramsSerializer: function (body) {
      return Qs.stringify(body, { skipNulls: true });
    },
  });
};

export const getUserAuthMe = () => {
  return axiosInstance.get<IRegistrationForm>(userAuthMeUrl);
};

export const getUserById = async (id: number) => {
  return await axiosInstance.get<IRegistrationFormData>(`${userUrl}/${id}`);
};

export const putUserById = (params: IEditUser) => {
  return axiosInstance.put<IRegistrationForm>(
    `${userUrl}${params.id}`,
    params,
    {
      paramsSerializer: function (params) {
        return Qs.stringify(params, { skipNulls: true });
      },
    }
  );
};
//book block
export const getBooks = async (params: string) => {
  return await axiosInstance.get<IBook>(`${bookUrl}${params}`);
};

export const getBookById = async (id: number) => {
  return await axiosInstance.get<IBook>(`${bookUrl}/${id}`);
};

export const putBookById = (params: IEditBook) => {
  return axiosInstance.put(`${bookUrl}/${params.id}`, {
    rating: params.rating,
    userId: params.userId,
  }); //?
};

export const getRecomBooks = async () => {
  return await axiosInstance.get<IBook[]>(`${bookRecomUrl}`);
};

//genre block

export const getGenres = () => {
  return axiosInstance.get<GenreType[]>(genreUrl);
};

//post blok

export const createPost = (body: PostType) => {
  return axiosInstance.post(postUrl, body);
};

export const getPosts = async (params: string) => {
  return await axiosInstance.get<IPost[]>(`${postUrl}/book/${params}`);
};

export const getPostById = async (id: number) => {
  return await axiosInstance.get<IPost>(`${postUrl}/${id}`);
};
