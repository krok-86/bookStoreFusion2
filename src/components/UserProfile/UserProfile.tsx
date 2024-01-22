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

type FieldType = {//fix
  id?: string;
  name?: string;//fix
  email?: string;
  password?: string;
  dob?: string;
  remember?: string;
};


const UserProfile: FC = () => {
  const [password, setPassword] = useState(false);
  const [userValue, setUserValue] = useState<IRegistrationFormData>();
    console.log(userValue);

  const { id } = useParams();

  const userData = useAppSelector((state) => state.auth.data);
  console.log(userData)

  const dispatch = useAppDispatch();
  console.log(id)

  useEffect(() => {
    const fetchDataId = async () => {
      if (!id) return;
      console.log(id)
      try {
        const result = await getUserById(id);
        setUserValue(result.data);
        console.log(setUserValue)
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("getUserById", err);
      }
    };
    fetchDataId();
  }, []);
  
  // const updateUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   try {
  //     const newUserValue = { ...userData, user: event.target?.value };
  //     setUserValue(newUserValue);
  //     console.log(newUserValue)
  //   } catch (err) {
  //     console.log("updateUser", err);
  //   }
  // };

  // const sendUser = async () => {
  //   if (!id) return;
  //   try {
  //     await dispatch(
  //       sendUpdatedPost({ id, postText: postData?.post || "" })
  //     ).unwrap();
  //     successToast("The post has been edited");
  //     navigate(`${URLS.MAIN_PAGE}`);
  //   } catch (err: any) {
  //     errorToast(err.data);
  //   }
  // };

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
            <Input 
            //  addonBefore="http://"
             value={userValue}/>
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
              <Form.Item<IRegistrationForm>
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
