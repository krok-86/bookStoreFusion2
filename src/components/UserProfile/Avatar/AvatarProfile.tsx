import AvatarProfileStyled from "./AvatarProfile.styled";

import { FC, useState } from "react";
import {
  CameraOutlined,
  LoadingOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { useAppSelector } from "../../../hook";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AvatarProfile: FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const userData = useAppSelector((state) => state.auth.data);
 console.log(userData?.avatarImg)

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // const userDataId = useAppSelector((state) => state.auth.data?.id);
  
  return (
    <AvatarProfileStyled>
      <Upload
        name="image"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={`http://localhost:3003/users/${userData?.id}`}//fix вынести в константы
        beforeUpload={beforeUpload}
        onChange={handleChange}
        method="PUT"
        headers={{
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTcwNjQ2OTk0NiwiZXhwIjoxNzA3MDc0NzQ2fQ.plSHwQLDWufToucbMcrBL2RaSKO8adJ-JMgHkQIezag",
        }}//fix
      >
          <div className="avatar-wrap">
            <img className="avatar-img" src={`http://localhost:3003/${userData?.avatarImg}`} alt="avatar" />
          </div>
        {/* ) : (
          <div>
            <div className="avatar-wrap">
            <img className="avatar-img" src="/images/outlineUser.jpg" alt="avatar" />
          </div> */}
            {/* <img className="avatar-wrap" src="/images/outlineUser.jpg" /> */}
            {/* <UserOutlined /> */}
          {/* </div>
        )} */}
        <div className = "camera-wrap"><CameraOutlined className="camera" /></div>
      </Upload>
    </AvatarProfileStyled>
  );
};

export default AvatarProfile;
