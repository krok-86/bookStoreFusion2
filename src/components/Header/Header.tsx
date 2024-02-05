import { Avatar, Badge, Button, Space } from "antd";
import HeaderStyled from "./Header.styled";
import { CATALOG, LOG_BUTTON, SING_BUTTON, URLS } from "../../constants";
import { FC } from "react";
import { Input } from "antd";
import { SearchProps } from "antd/es/input/Search"; //fix, I can use other import
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../hook";
import { LocalStorageUtil } from "../../utils/localStorage/localStorage";
import { logout } from "../../redux/slices/auth";
import { successToast } from "../../utils/toasts/toasts";

const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.data);

  const onClickLogOut = () => {
    if (window.confirm("Do you really want to go out?")) {
      dispatch(logout());
      LocalStorageUtil.removeItem("token");
      successToast("User is log out");
    }
  };
  return (
    <HeaderStyled>
      <div className="head-small">
        <div className="nav-bar">
        <Link to={URLS.MAIN_PAGE}>
          <img src="/images/logo.svg" alt="" />
          </Link>
          <div className="nav-title">{CATALOG}</div>
          <Search
            className="search search__desktop"
            placeholder="Search"
            onSearch={onSearch}
          />
          {!isAuth ? (
            <div className="buttons-auth-wrap">
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
          ) : (
            <Space size="middle" className="bage-block">
              <Link to={URLS.CART}>
                <Badge color="#BFCC94" count={1}>
                  <Avatar size="large" icon={<ShoppingCartOutlined />} />
                </Badge>
              </Link>
              <Badge count={0}>
                <Avatar size="large" icon={<HeartOutlined />} />
              </Badge>
              <Link to={URLS.PROFILE}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Link>
              <Avatar
                size="large"
                icon={<LogoutOutlined onClick={onClickLogOut} />}
              />
            </Space>
          )}
        </div>
        <Search
          className="search search__mobile"
          placeholder="Search"
          onSearch={onSearch}
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
