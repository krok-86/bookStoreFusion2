import { FC } from "react";
import { IPostList, PostType } from "../../../types/types";
import Post from "../../containers/Post/Post";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { BUTTON } from "../../../constants/constants";
import { addPost } from "../../../redux/slices/post";
import { successToast, errorToast } from "../../../utils/toasts/toasts";
import { useAppSelector, useAppDispatch } from "../../../hooks/hook";
import PostListStyled from "./PostList.styled";
import AuthNow from "../AuthNow/AuthNow";

const PostList: FC<IPostList> = ({ posts }) => {
  const userData = useAppSelector((state) => state.auth.data);
  const { book } = useAppSelector((state) => state.books);
  const isAuth = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {} as PostType,
  });

  const submitPosts = async (value: PostType) => {
    try {
      const body = {
        ...value,
        userId: userData?.id,
        bookId: book?.id,
      };
      dispatch(addPost(body)).unwrap();
      successToast("Post is created");
    } catch (err: any) {
      console.log("submit post", err);
      errorToast(err.data);
    }
  };

  return (
    <PostListStyled>
      {posts?.map((obj) => (
        <Post post={obj} key={obj.id} />
      ))}
      {isAuth ? (
        <form onSubmit={handleSubmit(submitPosts)}>
          <div className="post-block">
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
          </div>
        </form>
      ) : (
        <AuthNow />
      )}
    </PostListStyled>
  );
};
export default PostList;
