import { Button } from "antd";
import { FC } from "react";
import AuthNowStyled from "./AuthNow.styled";
import { Link } from "react-router-dom";
import { LOG_BUTTON, SING_BUTTON, URLS } from "../../constants";

const AuthNow: FC = () => {
  return (
    <AuthNowStyled>
      <div className="auth-now-img__fairy">
        <img className="auth-now-img fairy" src="/images/fairy.png" alt="" />
      </div>
      <div className="auth-now-text">
        <p className="auth-now-text__bold">Authorize now</p>
        <p className="auth-now-text__normal">
          Authorize now and discover the fabulous world of books
        </p>
        <Link to={URLS.AUTH}>
          <Button className="button-left" type="primary">
            {LOG_BUTTON}
          </Button>
        </Link>
        <Link to={URLS.REG}>
          <Button className="button-right" type="primary">
            {SING_BUTTON}
          </Button>
        </Link>
      </div>
      <div className="auth-now-img__castle">
        <img className="auth-now-img castle" src="/images/castle.svg" alt="" />
      </div>
    </AuthNowStyled>
  );
};
export default AuthNow;
