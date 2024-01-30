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
import { IRegistrationForm } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { sendUpdatedUser } from "../../../redux/slices/auth";
import AvatarProfile from "../Avatar/AvatarProfile";

type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
  remember?: string; //fix?
  dob?: Date;
  newPassword?: string;
  confirmNewPassword?: string;
};

const UserProfile: FC = () => {
  const [active, setActive] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState<IRegistrationForm>();

  const userData = useAppSelector((state) => state.auth.data);

  const updateUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof FieldType
  ) => {
    try {
      const newData = { ...userValue, [field]: event.target?.value };
      console.log(newData);
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
          ...(userValue?.fullName && { fullName: userValue?.fullName }),
          ...(userValue?.email && { email: userValue?.email }),
          ...(userValue?.newPassword && { password: userValue?.newPassword }),
        })
      ).unwrap();
      successToast("User has been edited");
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  console.log(userValue);

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
        {/* <div className="camera-wrap">
        </div> */}
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
        >
          <Form.Item<FieldType>
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
          </Form.Item>
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your email"
            //  name={"email"}
            // rules={[{ required: true, message: "Please input your email!" }]}
            // hasFeedback
          >
            {userData?.email && (
              <Input
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
            name="password"
            label={active ? "Your Password" : "Old password"}
            dependencies={["password"]}
            // rules={[
            //   { required: true, message: "Please input your old password!" },
            // ]}
            hasFeedback
          >
            <Input.Password
            readOnly={true}
            />
          </Form.Item>
          {!active && (
            <>
              <Form.Item<FieldType>
                className="newUser-text"
                label="New password"
                name="newPassword"
                rules={[{ message: "Please input your password!" }]}
                hasFeedback //fix what is that?
              >
                <Input.Password readOnly={active} />
              </Form.Item>
              <Form.Item
                className="newUser-text"
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["newPassword"]}
                hasFeedback
                rules={[
                  {
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
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
                <Input.Password
                readOnly={active}
                onChange={(event) => updateUserData(event, "newPassword")}/>
              </Form.Item>
              <Form.Item>
                <Button
                  className="button"
                  // onClick={sendNewUserData}
                  type="primary"
                  htmlType="submit"
                >
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