import { FC, useMemo, useState } from "react";
import UserProfileStyled from "./UserProfile.styled";
import {
  BUTTON_TITLE,
  CHANGE_INFO,
  CHANGE_PASWORD,
  CIPHER,
  ENTER_PASS,
  PASSWORD_TITLE,
  PERSONAL_INFO,
  REPEAT_PASS,
  URLS,
} from "../../../constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../utils/toasts/toasts";
import { FormValues } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { sendUpdatedUser } from "../../../redux/slices/auth";
import AvatarProfile from "../Avatar/AvatarProfile";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputArea from "../../InputArea/InputArea";

const UserProfile: FC = () => {
  const [active, setActive] = useState(false);
  const [trackPass, setTrackPass] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.auth.data);

  const changeInfo = () => {
    setActive(true);
  };
  const changePassword = () => {
    setTrackPass(true);
  };

  const validationSchema = Yup.object().shape({
    id: Yup.number(),
    fullName: Yup.string(),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
    .max(20, "Password must not exceed 20 characters"),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords do not match"
    ),
  });
  const defaultValues = useMemo(() => {
    if (!userData) {
      return {
        id: -1,
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    }
    return {
      id: userData?.id || -1,
      fullName: userData?.fullName || "",
      email: userData?.email || "",
      password: "",
      confirmPassword: "",
    };
  }, [userData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await dispatch(sendUpdatedUser(data)).unwrap();
      successToast("User has been edited");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <UserProfileStyled>
      <div className="avatar-wrap-prof">
        <AvatarProfile />
      </div>
      <div className="info-block">
        <div className="pers-title-wrap">
          <div className="pers-title">{PERSONAL_INFO}</div>
          <div className="change-title" onClick={changeInfo}>
            {CHANGE_INFO}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputArea
            active={active}
            register={register}
            errors={errors}
            isFilled={!!userData?.fullName?.length}
            field="fullName"
            label="Your name"
          />
          <InputArea
            active={active}
            register={register}
            errors={errors}
            isFilled={!!userData?.email?.length}
            field="email"
            label="Your email"
            // value={userData?.email}
          />
          <div className="pass-wrap">
            <div className="pers-title">{PASSWORD_TITLE}</div>
            <div className="change-title" onClick={changePassword}>
              {CHANGE_PASWORD}
            </div>
          </div>
          <InputArea
            active={false}
            placeholder={CIPHER}
            // register={register}
            errors={errors}
            isFilled={true}
            field="fullName"
            label="Old password"
            // value={CIPHER}
            isMock
          />
          {trackPass ? (
            <>
              <InputArea
                active={trackPass}
                register={ trackPass && register}
                errors={errors}
                isFilled={false}
                field="password"
                label="New password"
              />
              <div className="pass-title">{ENTER_PASS}</div>
              <InputArea
                active={trackPass}
                register={ trackPass && register}
                errors={errors}
                isFilled={false}
                field="confirmPassword"
                label="Password replay"
              />
              <div className="pass-title">{REPEAT_PASS}</div>
            </>
          ) : (
            <div className="placeholder__empty" />
          )}
          {(active || trackPass) && (
            <Button className="button-prof" type="submit">
              {BUTTON_TITLE}
            </Button>
          )}
        </form>
      </div>
    </UserProfileStyled>
  );
};
export default UserProfile;
