import { Button } from "antd";
import HeaderStyled from "./Header.styled";
import { CATALOG, LOG_SING_BUTTON, URLS } from "../../constants";


import { FC } from 'react';
import { Input } from 'antd';
import { SearchProps } from "antd/es/input/Search";//fix, I can use other import
import { Link } from "react-router-dom";



const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header:FC = () => {
 
  return (
<HeaderStyled>
<div className="head-small">
  <div className="nav-bar">
  <img src='/images/logo.svg' />
  <div className="nav-title">{CATALOG}</div>
  <Search className = "search search__desktop" placeholder="Search" onSearch={onSearch} />
  <Link to={URLS.REG}>
  <Button className="button" type = "primary">
    {LOG_SING_BUTTON}
    </Button>
    </Link>
    </div>
    <Search className = "search search__mobile" placeholder="Search" onSearch={onSearch} />
    </div>
</HeaderStyled>
  )
}

export default Header;