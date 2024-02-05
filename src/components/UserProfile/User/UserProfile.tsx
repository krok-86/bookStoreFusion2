import { FC, useState } from "react";
import UserProfileStyled from "./UserProfile.styled";
import {
  BUTTON_TITLE,
  CHANGE_INFO,
  CHANGE_PASWORD,
  PASSWORD_TITLE,
  PERSONAL_INFO,
  URLS,
} from "../../../constants";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../utils/toasts/toasts";
import { FieldType, IRegistrationForm } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { sendUpdatedUser } from "../../../redux/slices/auth";
import AvatarProfile from "../Avatar/AvatarProfile";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

const UserProfile: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [trackPass, setTrackPass] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState<IRegistrationForm>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const userData = useAppSelector((state) => state.auth.data);

  const updateUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof FieldType
  ) => {
    try {
      const newData = { ...userValue, [field]: event.target?.value };
      setUserValue(newData);
    } catch (err) {
      console.log("update user data", err);
    }
  };

  const sendNewUserData = async () => {
    try {
      await dispatch(
        sendUpdatedUser({
          id: userData?.id,
          fullName: userValue?.fullName,//fix reva
          email: userValue?.email,//fix reva
          password: userValue?.password,//fix reva
        })
      ).unwrap();
      successToast("User has been edited");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  const changeInfo = () => {
    setActive(true);
  };
  const changePassword = () => {
    setTrackPass(true);
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={sendNewUserData}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your name"
            name="fullName"
          >
            <Input
              readOnly={!active}
              defaultValue={userData?.fullName}
              onChange={(event) => updateUserData(event, "fullName")}
              prefix={<UserOutlined className="mail-icon" />}
            />
          </Form.Item>
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your email"
            name="email"
            rules={[
              {
                // required: true,
                type: 'email',
                min: 3,
                max: 10,
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="mail-icon" />}
              readOnly={!active}
              defaultValue={userData?.email}
              onChange={(event) => updateUserData(event, "email")}
            />
          </Form.Item>
          <div className="pass-wrap">
            <div className="pers-title">{PASSWORD_TITLE}</div>
            <div className="change-title" onClick={changePassword}>
              {CHANGE_PASWORD}
            </div>
          </div>
          <Form.Item<FieldType>
            label={passwordVisible ? "Your Password" : "Old password"}
          >
            <Input
              readOnly={true}
              defaultValue="a ne password"
              prefix={<EyeInvisibleOutlined className="mail-icon" />}
              type="password"
            />
          </Form.Item>
          {trackPass && (
            <>
              <Form.Item<FieldType>
                className="newUser-text"
                label="Enter your password"
                name={"password"}
                hasFeedback
              >
                <Input
                  className="input-text"
                  placeholder="Password"
                  prefix={
                    passwordVisible ? (
                      <EyeTwoTone
                        className="mail-icon"
                        onClick={() => setPasswordVisible(false)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        className="mail-icon"
                        onClick={() => setPasswordVisible(true)}
                      />
                    )
                  }
                  type={passwordVisible ? "text" : "password"}
                  onChange={(event) => updateUserData(event, "password")}
                />
              </Form.Item>
              <Form.Item<FieldType>
                className="newUser-text"
                label="Repeat new password"
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
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
                <Input
                  className="input-text input-empty"
                  placeholder="Password replay"
                  prefix={
                    confirmVisible ? (
                      <EyeTwoTone
                        className="mail-icon"
                        onClick={() => setConfirmVisible(!confirmVisible)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        className="mail-icon"
                        onClick={() => setConfirmVisible(!confirmVisible)}
                      />
                    )
                  }
                  type={confirmVisible ? "text" : "password"}
                />
              </Form.Item>
              </>
          )}
          {(active || trackPass) && (//fix
              <Button className="button" type="primary" htmlType="submit">
                {BUTTON_TITLE}
              </Button>
          )}
        </Form>
      </div>
    </UserProfileStyled>
  );
};
export default UserProfile;
