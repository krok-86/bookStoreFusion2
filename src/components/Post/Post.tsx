import { FC } from "react";
import PostStyled from "./Post.styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { BUTTON, URLS } from "../../constants";
import { Button, UploadProps } from "antd";
import { changeAvatar } from "../../redux/slices/auth";
import { errorToast, successToast } from "../../utils/toasts/toasts";
import { useForm } from "react-hook-form";
import { PostType } from "../../types";
import AuthNow from "../AuthNow/AuthNow";
import { addPost } from "../../redux/slices/post";

// interface IPostDescription {
//   book?: IPost;
// }

const Post: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const {book} = useAppSelector((state) => state.books);
  const isAuth = useAppSelector((state) => state.auth.data);
  const { register, handleSubmit } = useForm({
    defaultValues: {} as PostType,
  });
  const submitPosts = async (value: PostType) => {
    try {
      const body = {
        ...value,
        userId: userData?.id,
        bookId: book?.id
      };
      dispatch(addPost(body)).unwrap();
      successToast("Post is created");
    } catch (err: any) {
      console.log("submitPosts", err);
      errorToast(err.data);
    }
  };
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
            {userData?.avatarImg?.length || 0 > 1 ? (
              <img
                className="avatar-img"
                src={ `${URLS.MAINURL}${userData?.avatarImg}`}
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
            <div className="user-name">{userData?.fullName}</div>
            <div className="time-comment">Left a comment two days ago</div>
          </div>
        </div>
        <div className="post">
          {book?.title}
        </div>
      </div>
      {isAuth ? (
        <form onSubmit={handleSubmit(submitPosts)}>
          <div className="post-input__wrapper">
            <textarea
              className="post-input"
              {...register("postText", { required: true })}
              placeholder="Share a comment"
            />
          </div>
          <div className="post-buttons-wrap">
            <Button className="post-save-button" htmlType="submit">
              {BUTTON}
            </Button>
          </div>
        </form>
      ) : (
        <AuthNow />
      )}
    </PostStyled>
  );
};
export default Post;
