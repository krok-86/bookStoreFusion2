import AvatarProfileStyled from "./AvatarProfile.styled";

import { FC, useState } from "react";
import {
  CameraOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { changeAvatar } from "../../../redux/slices/auth";
import { LocalStorageUtil } from "../../../utils/localStorage/localStorage";
import { URLS } from "../../../constants";

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
  const dispath = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const userData = useAppSelector((state) => state.auth.data);

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
      dispath(changeAvatar(info.file.response.avatarImg));
    }
  };

  // const uploadButton = (
  //   <button style={{ border: 0, background: "none" }} type="button">
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </button>
  // );

  const photo =
    (userData?.avatarImg?.length || 0) > 1
      ? `http://localhost:3003/${userData?.avatarImg}`
      : "/images/outlineUser.jpg";
  return (
    <AvatarProfileStyled>
      <Upload
        name="image"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={`${URLS.MAINUSERURL}${userData?.id}`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        method="PUT"
        headers={{
          Authorization: LocalStorageUtil.getItem("token") || "",
        }}
      >
<div className="avatar">
        <div className="avatar-wrap">
          <img className="avatar-img" src={photo} alt="avatar" />
        </div>
        <div className="camera-wrap">
          <CameraOutlined className="camera" />
        </div>
        </div>
      </Upload>
    </AvatarProfileStyled>
  );
};

export default AvatarProfile;
