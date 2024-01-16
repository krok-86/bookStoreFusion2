import { Button, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";

import { successToast, errorToast } from "../../utils/toasts/toasts";

import { fetchAuth, fetchReg } from "../../redux/slices/auth";
import { LocalStorageUtil } from "../../utils/localStorage/localStorage";
import { FC } from "react";
import { IRegistrationForm } from "../../types";
import { LOG_IN_BUTTON, URLS } from "../../constants";
import NewUserStyled from "./NewUser.styled";

interface INewUser {
  isRegistration: boolean;
}
type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const NewUser: FC<INewUser> = ({ isRegistration }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const title = isRegistration ? "Log In" : "Sing Up";

  const submitForm = async (value: IRegistrationForm) => {
    try {
      if (isRegistration) {
        const data = await dispatch(fetchReg(value)).unwrap();
        if (data.token) {
          LocalStorageUtil.setItem("token", data.token);
        }
        successToast("User is created");
        navigate(`${URLS.MAIN_PAGE}`);
      } else {
        const data = await dispatch(fetchAuth(value)).unwrap();
        if (data.token?.length) {
          LocalStorageUtil.setItem("token", data.token);
          successToast("User is authorized");
          navigate(`${URLS.MAIN_PAGE}`);
        } else {
          errorToast(data?.payload?.data || "");
        }
      }
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <NewUserStyled>
      <div className="user-text-wrap">
        <div className="user-header-wrap">
          <div className="user-text">{title}</div>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={submitForm}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Enter your email"
            name={"email"}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item<FieldType>
            className="newUser-text"
            label="Enter your password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback//fix what is that?
          >
            <Input.Password />
          </Form.Item>
  
          {!isRegistration && (
          <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
          )}

          <div className="button-wrap">
            <Form.Item>
              <Button className="user-button" type="primary" htmlType="submit">
                {title}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="banner-wrap">
      <img className="banner" src='/images/banner login.png' />
      </div>
    </NewUserStyled>
  );
};
export default NewUser;