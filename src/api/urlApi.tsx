import axiosInstance from ".";

import {IEditUser, IRegistrationForm, IRegistrationFormData} from "../types";

const userUrl = 'users/';
const userRegUrl = 'users/registration';
const userAuthUrl = 'users/authorization';
const userAuthMeUrl = 'users/authorization/me';


//user block

export const postUserReg = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userRegUrl,body);
}

export const postUserAuth = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userAuthUrl,body);
}

export const getUserAuthMe = () => {
    return axiosInstance.get< IRegistrationForm>(userAuthMeUrl);
}

export const getUserById = async (id: string) => {
    return await axiosInstance.get<IRegistrationFormData>(`${userUrl}/${id}`)
}

export const putUserById = (params: IEditUser) => {
    return axiosInstance.put(`${userUrl}/${params.id}`, {fullName: params.fullName});//?
}