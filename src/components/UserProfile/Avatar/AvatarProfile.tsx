

import { FC } from "react";
import { CameraOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { changeAvatar } from "../../../redux/slices/auth";
import { LocalStorageUtil } from "../../../utils/localStorage/localStorage";
import { URLS } from "../../../constants";
import { successToast, errorToast } from "../../../utils/toasts/toasts";
import { beforeUpload } from "../../../utils/avatarValidation/avatarValidation";
import AvatarProfileStyled from "./AvatarProfile.styled";


const AvatarProfile: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);

  const checkUploadingResult: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done") {
      dispatch(changeAvatar(info.file.response.avatarImg));
      successToast('New avatar is uploaded');
    }
    if (info.file.status === "error") {
      errorToast('Error on loading new avatar');
    }
  };

  return (
    <AvatarProfileStyled>
      <Upload
        name="image"
        // className="avatar-uploader"
        showUploadList={false}
        action={`${URLS.MAINUSERURL}${userData?.id}`}
        beforeUpload={beforeUpload}
        onChange={checkUploadingResult}
        method="PUT"
        headers={{Authorization: LocalStorageUtil.getItem("token") || ""}}
      >
        <div className="avatar">
          <div className="avatar-wrap">
            <img
              className="avatar-img"
              src={ userData?.avatarImg?.length ? `${URLS.MAINURL}${userData?.avatarImg}` : '' }
              alt="avatar"
            />
            <div className="camera-wrap">
              <CameraOutlined className="camera" />
            </div>
          </div>
        </div>
      </Upload>
      </AvatarProfileStyled>
  );
};

export default AvatarProfile;