import { FC } from "react";
import UserProfileStyled from "./UserProfile.styled";
import { CameraOutlined } from "@ant-design/icons/lib/icons";
import { CHANGE_INFO, CHANGE_PASWORD, PASSWORD_TITLE, PERSONAL_INFO, REPEAT_YOUR_PASS, YOUR_PASS } from "../../constants";
import { Button, Form, Input } from "antd";

type FieldType = {
    name?: string;
    // email?: string;
    password?: string;
    remember?: string;
  };

const UserProfile: FC = () => {
    return (
<UserProfileStyled>
    <div className = "avatar-wrap">

    <img className = "avatar" src='/images/reva.png' />
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
            label="Enter your email"
            name={"name"}
            rules={[{ required: true, message: "Please input your name!" }]}
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
          <div className="button-wrap">
            <Form.Item>
              <Button className="user-button" type="primary" htmlType="submit">
                {/* {title} */}
                "title"
              </Button>
            </Form.Item>
          </div>
        </Form>
    <div className="pass-wrap">
    <div className="pass-title">{PASSWORD_TITLE}</div>
    <div className="pass-chang-title">{CHANGE_PASWORD}</div>
    </div>
    <div className="">{YOUR_PASS}</div>
    <div className="">{REPEAT_YOUR_PASS}</div>
    </div>
</UserProfileStyled>
    )
}
export default UserProfile;