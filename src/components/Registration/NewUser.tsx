// import { Button, Form } from "antd";

// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../hook";

// import { successToast, errorToast } from "../../utils/toasts/toasts";

// import { fetchAuth, fetchReg } from "../../redux/slices/auth";
// import { LocalStorageUtil } from "../../utils/localStorage/localStorage";
// import { FC, useState } from "react";
// import { FieldType, FormValues, INewUser, IRegistrationForm } from "../../types";
// import { URLS } from "../../constants";
// import NewUserStyled from "./NewUser.styled";
// import {
//   EyeInvisibleOutlined,
//   EyeTwoTone,
//   MailOutlined,
// } from "@ant-design/icons";
// import { AxiosError } from "axios";// fix reva
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { SubmitHandler, useForm } from "react-hook-form";
// import InputArea from "../InputArea/InputArea";


// const NewUser: FC<INewUser> = ({ isRegistration }) => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   // const [passwordVisible, setPasswordVisible] = useState(false);
//   // const [confirmVisible, setConfirmVisible] = useState(false);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().required("Email is required").email("Email is invalid"),
//     fullName: Yup.string(),
//     password: Yup.string()
//       .min(4, "Password must be at least 4 characters")
//       .max(20, "Password must not exceed 20 characters"),
//       confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords do not match")
//   });

//   const defaultValues = {
//         fullName: "",
//         email: "",
//         password: "",
//         confirmPassword:""
//       };

//   const title = isRegistration ? "Sing Up" : "Log In";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     reValidateMode: "onChange",
//     defaultValues,
//   });

//   const onSubmit: SubmitHandler<FormValues> = async (formData) => {
//     try {
//       if (isRegistration) {
//         const data = await dispatch(fetchReg(formData)).unwrap();
//         if (data.token) {
//           LocalStorageUtil.setItem("token", data.token);
//         }
//         successToast("User is created");
//         navigate(`${URLS.MAIN_PAGE}`);
//       } else {
//         const data = await dispatch(fetchAuth(formData)).unwrap();
//         if (data.token?.length) {
//           LocalStorageUtil.setItem("token", data.token);
//           successToast("User is authorized");
//           navigate(`${URLS.MAIN_PAGE}`);
//         } else {
//           errorToast(data?.payload?.data || "");
//         }
//       }
//       navigate(`${URLS.MAIN_PAGE}`);
//     } catch (err:any) {
//       if (err instanceof AxiosError) {// fix reva
//          errorToast(err.message);// fix reva
//       }
//     }
//   };
//   return (
//     <NewUserStyled>
//       <div className="user-text-wrap">
//         <div className="right-column">
//           <div className="user-form-wrapper">
//             <div className="user-header-wrap">
//               <div className="user-text">{title}</div>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//             <InputArea
//             active={true}
//             register={register}
//             errors={errors}
//             isFilled={false}
//             field='email'
//             label="Enter your email"
//           />
//             <InputArea
//             active={true}
//             register={register}
//             errors={errors}
//             isFilled={false}
//             field='password'
//             label="Enter your password"
//           />
// {isRegistration && (
//                 <InputArea
//                 active={true}
//                 register={register}
//                 errors={errors}
//                 isFilled={false}
//                 field='confirmPassword'
//                 label="Confirm Password"
//                 />
//               )}
//               <div className="button-wrap">
//                 <Form.Item>
//                   <Button
//                     className="user-button"
//                     type="primary"
//                     htmlType="submit"
//                   >
//                     {title}
//                   </Button>
//                 </Form.Item>
//               </div>
//             </form>
//           </div>
//           <div className="left-column">
//             <div className="banner-wrap">
//               <img className="banner" src="/images/banner login.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </NewUserStyled>
//   );
// };
// export default NewUser;