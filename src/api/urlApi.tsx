import axiosInstance from ".";
import Qs from 'qs';
import {IEditUser, IRegistrationForm, IRegistrationFormData} from "../types";

const userUrl = 'users/';
const userRegUrl = 'users/registration';
const userAuthUrl = 'users/authorization';
const userAuthMeUrl = 'users/authorization/me';


//user block

export const postUserReg = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userRegUrl,body, {// fix reva
        paramsSerializer: function (body) {
        return Qs.stringify(body, {skipNulls: true})
      },});
}

export const postUserAuth = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userAuthUrl,body, {// fix reva
        paramsSerializer: function (body) {
        return Qs.stringify(body, {skipNulls: true})
      },});
}

export const getUserAuthMe = () => {
    return axiosInstance.get< IRegistrationForm>(userAuthMeUrl);
}

export const getUserById = async (id: string) => {
    return await axiosInstance.get<IRegistrationFormData>(`${userUrl}/${id}`)
}

export const putUserById = (params: IEditUser) => {
    return axiosInstance.put<IRegistrationForm>(`${userUrl}${params.id}`, params, {// fix reva
        paramsSerializer: function (params) {// fix reva
        return Qs.stringify(params, {skipNulls: true})// fix reva
      },});// fix reva
}

// export const putUserById = (params: IEditUser) => {
//     return axiosInstance.put<IRegistrationForm>(`${userUrl}/${params.id}`,  params);//?
// }