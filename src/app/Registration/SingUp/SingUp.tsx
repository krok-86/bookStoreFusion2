import { SubmitHandler, useForm } from "react-hook-form";
import SingUpStyled from "./SingUp.styled";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hook";
import { LocalStorageUtil } from "../../../utils/localStorage/localStorage";
import { fetchReg } from "../../../redux/slices/auth";
import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  REPEAT_PASS,
  TITLE_SING,
  URLS,
} from "../../../constants/constants";
import { errorToast, successToast } from "../../../utils/toasts/toasts";
import InputArea from "../../../components/containers/InputArea/InputArea";
import { Button, Form } from "antd";

const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    fullName: Yup.string(),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must not exceed 20 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords do not match"
    ),
  });
  const defaultValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      const data = await dispatch(fetchReg(formData)).unwrap();
      if (data.token) {
        LocalStorageUtil.setItem("token", data.token);
      }
      successToast("User is created");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      // if (err instanceof AxiosError) {
        // fix 
        errorToast(err.data ||  "Registration error");
      // }
    }
  };
  return (
    <SingUpStyled>
      <div className="user-text-wrap">
        <div className="right-column">
          <div className="user-form-wrapper">
            <div className="user-header-wrap">
              <div className="user-text">{TITLE_SING}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrap">
              <InputArea
                active={true}
                register={register}
                errors={errors}
                isFilled={false}
                field="email"
                label="Email"
              />
              <div className="change-title">{ENTER_EMAIL}</div>
              <InputArea
                active={true}
                register={register}
                errors={errors}
                isFilled={false}
                field="password"
                label="Password"
              />
              <div className="change-title">{ENTER_PASSWORD}</div>
              <InputArea
                active={true}
                register={register}
                errors={errors}
                isFilled={false}
                field="confirmPassword"
                label="Password replay"
              />
              <div className="change-title">{REPEAT_PASS}</div>
              </div>
              <div className="button-wrap">
                <Form.Item>
                  <Button
                    className="user-button"
                    htmlType="submit"
                  >
                    {TITLE_SING}
                  </Button>
                </Form.Item>
              </div>
            </form>
          </div>
          <div className="left-column">
            <div className="banner-wrap">
              <img className="banner" src="/images/banner login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </SingUpStyled>
  );
};
export default SingUp;
