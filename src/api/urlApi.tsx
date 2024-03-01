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
} from "../types";

const userUrl = "users/";
const userRegUrl = "users/registration";
const userAuthUrl = "users/authorization";
const userAuthMeUrl = "users/authorization/me";

const genreUrl = "/genres";

const bookUrl = "books";

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
    // fix reva
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
      // fix reva
      paramsSerializer: function (params) {
        // fix reva
        return Qs.stringify(params, { skipNulls: true }); // fix reva
      },
    }
  ); // fix reva
};

export const getBooks = async (params: string) => {
  return await axiosInstance.get<IBook>(`${bookUrl}${params}`);
};

export const getBookById = async (id: number) => {
  return await axiosInstance.get<IBook>(`${bookUrl}/${id}`);
};

export const putBookById = (params: IEditBook) => {
  return axiosInstance.put(`${bookUrl}/${params.id}`, {
    rating: params.rating,
  }); //?
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
  return await axiosInstance.get<PostType>(`${postUrl}${params}`);
};

export const getPostById = async (id: number) => {
  return await axiosInstance.get<IPost>(`${postUrl}/${id}`);
};
