import { FC } from "react";
import PostStyled from "./Post.styled";
import { useAppSelector } from "../../hook";
import { URLS } from "../../constants";

const Post: FC = () => {
    const userData = useAppSelector((state) => state.auth.data);
  return (
    <PostStyled>
      <div className="post-area">
        <div>
        <div className="avatar-wrap">
            { (userData?.avatarImg?.length || 0 > 1) ? (
            <img
              className="avatar-img"
              src={ `${URLS.MAINURL}${userData?.avatarImg}`}
              alt="avatar"
            /> ) : (
              <img
              className="avatar-img avatar-img__small"
              src='images/profile.svg'
              alt="avatar"
            />
            )}
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </PostStyled>
  );
};
export default Post;
