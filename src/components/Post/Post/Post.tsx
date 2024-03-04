import { FC } from "react";
import PostStyled from "./Post.styled";
import { URLS } from "../../../constants";
import { IPostDescription } from "../../../types";

const Post: FC<IPostDescription> = ({ post }) => {
  // const checkUploadingResult: UploadProps["onChange"] = (info) => {
  //   if (info.file.status === "done") {
  //     //fix
  //     dispatch(changeAvatar(info.file.response.avatarImg));
  //     successToast("New avatar is uploaded");
  //   }
  //   if (info.file.status === "error") {
  //     errorToast("Error on loading new avatar");
  //   }
  // };
  console.log("images/profile.svg")
  return (
    <PostStyled>
      <div className="post-area">
        <div className="user-data-area">
          <div className="avatar-wrap">
            {post?.user?.avatarImg?.length || 0 > 1 ? (
              <img
                className="avatar-img"
                src={`${URLS.MAINURL}${post?.user?.avatarImg}`}
                alt="avatar"
              />
            ) : (
              <img
                className="avatar-img avatar-img__small"
                src="images/profile.svg"
                alt="avatar"
              />
            )}
          </div>
          <div className="user-data">
            <div className="user-name">{post?.user?.fullName}</div>
            <div className="time-comment">Left a comment two days ago</div>
          </div>
        </div>
        <div className="post">{post?.postText}</div>
      </div>
    </PostStyled>
  );
};
export default Post;
