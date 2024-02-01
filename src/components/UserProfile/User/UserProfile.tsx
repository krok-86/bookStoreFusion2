import { FC, useState } from "react";
import UserProfileStyled from "./UserProfile.styled";
// import { CameraOutlined } from "@ant-design/icons/lib/icons";
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

// type FieldType = {
//   fullName?: string;
//   email?: string;
//   password?: string;
//   remember?: string; //fix?
//   dob?: Date;
//   newPassword?: string;
//   confirmNewPassword?: string;
// };

const UserProfile: FC = () => {
  const [active, setActive] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState<IRegistrationForm>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const userData = useAppSelector((state) => state.auth.data);

  const updateUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof FieldType
  ) => {
    try {
      const newData = { ...userValue, [field]: event.target?.value };
      setUserValue(newData);
      console.log(newData);
    } catch (err) {
      console.log("update user data", err);
    }
  };

  const sendNewUserData = async () => {
    try {
      await dispatch(
        sendUpdatedUser({
          id: userData?.id,
          ...(userValue?.fullName && { fullName: userValue?.fullName }),
          ...(userValue?.email && { email: userValue?.email }),
          ...(userValue?.password && { password: userValue?.password }),
        })

      ).unwrap();
      console.log(userValue)
      
      successToast("User has been edited");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  const changePassword = () => {
    setActive(false);
  };
  const changeName = () => {
    setActive(false);
  };

  return (
    <UserProfileStyled>
      <div className="avatar-wrap-prof">
        <AvatarProfile />
      </div>
      <div className="info-block">
        <div className="pers-title-wrap">
          <div className="pers-title">{PERSONAL_INFO}</div>
          <div className="change-title" onClick={changeName}>
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
            name={"fullName"}
            // rules={[
            //   {
            //     required: isRegistration,
            //     message: "Please input your name!",
            //   },
            // ]}
          >
            <Input
              readOnly={active}
              defaultValue={userData?.fullName}
              onChange={(event) => updateUserData(event, "fullName")}
              // className="input-text"
              // placeholder="Name"
              prefix={<UserOutlined className="mail-icon" />}
            />
          </Form.Item>
          {/* <Form.Item<FieldType>
            label="Your name"
            name={"fullName"}
            // rules={[{ required: true, message: "Please input your name!" }]}
          >
            {userData?.fullName && (
              <Input
                readOnly={active}
                defaultValue={userData?.fullName}
                onChange={(event) => updateUserData(event, "fullName")}
              />
            )}
          </Form.Item> */}
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your email"
            //name={"email"}
            // rules={[{ required: true, message: "Please input your email!" }]}
            // hasFeedback
          >
            {userData?.email && (
              <Input
                prefix={<MailOutlined className="mail-icon" />}
                readOnly={active}
                defaultValue={userData?.email}
                onChange={(event) => updateUserData(event, "email")}
              />
            )}
          </Form.Item>
          <div className="pass-wrap">
            <div className="pers-title">{PASSWORD_TITLE}</div>
            <div className="change-title" onClick={changePassword}>
              {CHANGE_PASWORD}
            </div>
          </div>
          <Form.Item<FieldType>
            // name="password"
            label={active ? "Your Password" : "Old password"}
            // dependencies={["password"]}
            // rules={[
            //   { required: true, message: "Please input your old password!" },
            // ]}
            // hasFeedback
          >
            <Input
            readOnly={true}
            defaultValue="a ne password"
            prefix={<EyeInvisibleOutlined className="mail-icon" />}
            //   passwordVisible ? (
            //     <EyeTwoTone
            //       className="mail-icon"
            //       onClick={() => setPasswordVisible(false)}
            //     />
            //   ) : (
            //     <EyeInvisibleOutlined
            //       className="mail-icon"
            //       onClick={() => setPasswordVisible(true)}
            //     />
            //   )
            // }
            type="password"
            />
          </Form.Item>
          {!active && (
            <>
              <Form.Item<FieldType>
                className="newUser-text"
                label="Enter your password"
                name={"password"}
                // rules={[
                //   { required: true, message: "Please input your password!" },
                // ]}
                hasFeedback //fix what is that?
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
                />
              </Form.Item>
              {/* {isRegistration && ( */}
                <Form.Item<FieldType>
                  className="newUser-text"
                  label="Confirm Password"
                  name="confirm"
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
                  <Input
                    className="input-text"
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
              {/* )} */}
              <Button
                className="button"
                // onClick={sendNewUserData}
                type="primary"
                htmlType="submit"
              >
                {BUTTON_TITLE}
              </Button>
              {/* </Form.Item> */}
            </>
          )}
        </Form>
      </div>
    </UserProfileStyled>
  );
};
export default UserProfile;
