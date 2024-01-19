import axiosInstance from ".";

import {IRegistrationForm, IRegistrationFormData} from "../types";

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