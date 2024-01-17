import { Avatar, Badge, Button, Space } from "antd";
import HeaderStyled from "./Header.styled";
import { CATALOG, LOG_SING_BUTTON, URLS } from "../../constants";


import { FC } from 'react';
import { Input } from 'antd';
import { SearchProps } from "antd/es/input/Search";//fix, I can use other import
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";



const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header:FC = () => {
  const isRegistration = false;
  return (
<HeaderStyled>
<div className="head-small">
  <div className="nav-bar">
  <img src='/images/logo.svg' />
  <div className="nav-title">{CATALOG}</div>
  <Search className = "search search__desktop" placeholder="Search" onSearch={onSearch} />
  {isRegistration ? (
  <Link to={URLS.REG}>
  <Button className="button" type = "primary">
    {LOG_SING_BUTTON}
    </Button>
    </Link>
  ):(
    <Space size="middle" className="bage-block">
      <Link to={URLS.REG} className="form-go-back">
    <Badge count={1}>
      {/* <Avatar  /> */}
      <div className="bage-wrap">
      <ShoppingCartOutlined className="bage" />
      </div>
    </Badge>
    </Link>
    <Badge count={0}>
      {/* <Avatar  /> */}
      <div className="bage-wrap">
      <HeartOutlined className="bage" />
      </div>
    </Badge>
    <Badge count={0}>
      <div className="bage-wrap">
      <UserOutlined className="bage" />
      </div>
    </Badge>
    </Space>
  )}
    </div>
    <Search className = "search search__mobile" placeholder="Search" onSearch={onSearch} />
    </div>
</HeaderStyled>
  )
}

export default Header;