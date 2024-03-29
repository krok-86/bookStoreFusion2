import type { FC } from 'react';
import type { IPostList, IRejectValue, PostType } from '../../../types/types';
import Post from '../../containers/Post/Post';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { BUTTON } from '../../../constants/constants';
import { addPost } from '../../../redux/slices/post';
import { successToast, errorToast } from '../../../utils/toasts/toasts';
import { useAppSelector, useAppDispatch } from '../../../hooks/hook';
import PostListStyled from './PostList.styled';
import AuthNow from '../AuthNow/AuthNow';

const PostList: FC<IPostList> = ({ posts }) => {
  const userData = useAppSelector((state) => state.auth.data);
  const { book } = useAppSelector((state) => state.books);
  const isAuth = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: {} as PostType,
  });

  const submitPosts = async (value: PostType) => {
    try {
      const body = {
        ...value,
        userId: userData?.id,
        bookId: book?.id,
      };
      await dispatch(addPost(body)).unwrap();
      successToast('Post is created');
      reset();
    } catch (err: unknown) {
      errorToast((err as IRejectValue).data);
    }
  };

  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      const values = getValues();
      submitPosts(values);
    }
  };
  return (
    <PostListStyled>
      {posts?.map((obj) => (
        <Post post={obj} key={obj.id} />
      ))}
      {isAuth ? (
        <form onSubmit={handleSubmit(submitPosts)} onKeyDown={(e) => checkKeyDown(e)}>
          <div className="post-block">
            <div className="post-input__wrapper">
              <textarea
                className="post-input"
                {...register('postText', { required: true })}
                placeholder="Share a comment"
              />
            </div>
            <div className="post-buttons-wrap">
              <Button
                className="post-save-button"
                htmlType="submit"
              >
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
