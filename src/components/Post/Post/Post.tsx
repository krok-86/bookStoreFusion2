import { FC, useEffect } from "react";
import PostStyled from "./Post.styled";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { BUTTON, URLS } from "../../../constants";
import { Button, UploadProps } from "antd";
import { changeAvatar } from "../../../redux/slices/auth";
import { errorToast, successToast } from "../../../utils/toasts/toasts";
import { useForm } from "react-hook-form";
import { IPost, IPostDescription, PostType } from "../../../types";
import AuthNow from "../../AuthNow/AuthNow";
import { addPost, getPostsList } from "../../../redux/slices/post";

const Post: FC<IPostDescription>= ({post}) => {
  const dispatch = useAppDispatch();
  
 
  // const submitPosts = async (value: Post) => {
  //   try {
  //     const body = {
  //       ...value,
  //       userId: userData?.id,
  //       topicId: topicData?.value,
  //     };
  //     dispatch(addPost(body)).unwrap();
  //     successToast("Post is created");
  //     navigate(`${URLS.MAIN_PAGE}`);
  //   } catch (err: any) {
  //     console.log("submitPosts", err);
  //     errorToast(err.data);
  //   }
  // };

  const checkUploadingResult: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done") {
      //fix
      dispatch(changeAvatar(info.file.response.avatarImg));
      successToast("New avatar is uploaded");
    }
    if (info.file.status === "error") {
      errorToast("Error on loading new avatar");
    }
  };
  return (
    <PostStyled>
      <div className="post-area">
        <div className="user-data-area">
          <div className="avatar-wrap">
            {post?.user?.avatarImg?.length || 0 > 1 ? (
              <img
                className="avatar-img"
                src={ `${URLS.MAINURL}${post?.user.avatarImg}`}
                alt="avatar"
              />
            ) : (
              <img
                className="avatar-img"
                src='images/profile.svg'
                alt="avatar"
              />
            )}
          </div>
          <div className="user-data">
            <div className="user-name">{post?.user?.fullName}</div>
            <div className="time-comment">Left a comment two days ago</div>
          </div>
        </div>
        <div className="post">
          {post?.postText}
          
        </div>
      </div>     
    </PostStyled>
  );
};
export default Post;
