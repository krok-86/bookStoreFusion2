import { Button } from "antd";
import { FC } from "react";
import AuthNowStyled from "./AuthNow.styled";

const AuthNow: FC = () => {
    return (
<AuthNowStyled>
    <div className="auth-now-img__fairy">
        <img className="auth-now-img fairy" src="/images/fairy.png" />
    </div>
    <div className="auth-now-text">
        <p className="auth-now-text__bold">Authorize now</p>
        <p className="auth-now-text__normal">Authorize now and discover the fabulous world of books</p>
        <Button className="auth-button">Log in/Sign up</Button>
    </div>
    <div className="auth-now-img__castle">
        <img className="auth-now-img castle" src="/images/castle.svg" />
    </div>
</AuthNowStyled>
    )
}
export default AuthNow;