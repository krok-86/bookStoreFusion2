import { FC, useState } from "react";
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

type FieldType = {
  name?: string;
  // email?: string;
  password?: string;
  remember?: string;
};

const UserProfile: FC = () => {
  const [password, setPassword] = useState(false);
  const changePassword = () => {
    setPassword(true);
  };
  return (
    <UserProfileStyled>
      <div className="avatar-wrap">
        <img className="avatar" src="/images/reva.png" />
        {/* <div className="camera-wrap"><CameraOutlined className="camera" /></div> */}
      </div>
      <div className="info-block">
        <div className="pers-title">{PERSONAL_INFO}</div>
        <div className="change-title">"href":{CHANGE_INFO}</div>
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
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            className="newUser-text"
            label="Your email"
            //  name={"email"}
            // rules={[{ required: true, message: "Please input your email!" }]}
            // hasFeedback
          >
            <Input />
          </Form.Item>
          <div className="pass-wrap">
            <div className="pers-title">{PASSWORD_TITLE}</div>
            <div className="change-title" onClick={changePassword}>
              {CHANGE_PASWORD}
            </div>
          </div>
          <Form.Item
            name="confirm"
            label="Your Password"
            dependencies={["password"]}
            // hasFeedback
          >
            <Input.Password />
          </Form.Item>
          {password && (
            <>
              <Form.Item<FieldType>
                className="newUser-text"
                label="New password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                hasFeedback //fix what is that?
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Repeat your password without errors"
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
                <Input.Password />
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
