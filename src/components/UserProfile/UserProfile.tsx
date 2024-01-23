import { FC, useEffect, useState } from "react";
import UserProfileStyled from "./UserProfile.styled";
import { CameraOutlined, MailOutlined } from "@ant-design/icons/lib/icons";
import {
  BUTTON_TITLE,
  CHANGE_INFO,
  CHANGE_PASWORD,
  PASSWORD_TITLE,
  PERSONAL_INFO,
  REPEAT_YOUR_PASS,
  YOUR_PASS,
} from "../../constants";
import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { errorToast } from "../../utils/toasts/toasts";
import { IRegistrationForm, IRegistrationFormData } from "../../types";
import { getUserById } from "../../api/urlApi";
import { useAppDispatch, useAppSelector } from "../../hook";

type FieldType = {
  //fix
  id?: string;
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
  name: string;
  email?: string;
  // password?: string;
  // dob?: string;
  // remember?: string;
};

const UserProfile: FC = () => {
  const [active, setActive] = useState(true);
  const dispatch = useAppDispatch();
  // const [userValue, setUserValue] = useState<IRegistrationFormData>();
  // console.log(userValue);

  const userData = useAppSelector((state) => state.auth.data);

  const sendNewUserData = () {
    try {
      await dispatch(
        sendUpdatedPost({ id, postText: postData?.post || "" })
      ).unwrap();
      successToast("The post has been edited");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  }

  const changePassword = () => {
    setActive(false);
  };
  const changeName = () => {
    setActive(false);
  };
  return (
    <UserProfileStyled>
      <div className="avatar-wrap">
        <img className="avatar" src="/images/reva.png" />
        <div className="camera-wrap">
          <CameraOutlined className="camera" />
        </div>
      </div>
      <div className="info-block">
        <div className="pers-title">{PERSONAL_INFO}</div>
        <div className="change-title" onClick={changeName}>
          {CHANGE_INFO}
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          //   onFinish={submitForm}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Your name"
            name={"name"}
            // rules={[{ required: true, message: "Please input your name!" }]}
          >
            {userData?.fullName && (
              <Input readOnly={active} defaultValue={userData?.fullName} />
            )}
          </Form.Item>
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your email"
            //  name={"email"}
            // rules={[{ required: true, message: "Please input your email!" }]}
            // hasFeedback
          >
            {userData?.email && (
              <Input readOnly={active} defaultValue={userData?.email} />
            )}
          </Form.Item>
          <div className="pass-wrap">
            <div className="pers-title">{PASSWORD_TITLE}</div>
            <div className="change-title" onClick={changePassword}>
              {CHANGE_PASWORD}
            </div>
          </div>
          <Form.Item<FieldType>
            name="oldPassword"
            label={active ? "Your Password" : "Old password"}
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please input your old password!" },
            ]}
            hasFeedback
          >
            <Input.Password readOnly= {active} placeholder={active ? "**********" : ""}/>
          </Form.Item>
          {!active && (
            <>
              <Form.Item<FieldType>
                className="newUser-text"
                label="New password"
                name="newPassword"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
               hasFeedback //fix what is that?
              >
                <Input.Password readOnly={active}/>
              </Form.Item>
              <Form.Item<FieldType>
                name="repeatPassword"
                label="Repeat your password"
                 dependencies={["password"]}
                 hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password readOnly={active}/>
              </Form.Item>
              <Form.Item>
                <Button className="button" type="primary" htmlType="submit">
                  {BUTTON_TITLE}
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </div>
    </UserProfileStyled>
  );
};
export default UserProfile;
