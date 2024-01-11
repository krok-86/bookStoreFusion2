import { Button } from "antd";
import HeaderStyled from "./Header.styled";
import { CATALOG, LOG_SING_BUTTON } from "../../constants";


import { FC } from 'react';
import { Input } from 'antd';
import { SearchProps } from "antd/es/input/Search";//fix, I can use other import



const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header:FC = () => {
 
  return (
<HeaderStyled>
<div className="head-small">
  <div className="nav-bar">
  <img src='/images/logo.svg' />
  <div className="nav-title">{CATALOG}</div>
  <Button className="button"
  type = "primary"
  >
    {LOG_SING_BUTTON}
    </Button>
    </div>
    <Search className = "search" placeholder="Search" onSearch={onSearch} style={{ width: 200 }} />
    </div>
</HeaderStyled>
  )
}

export default Header;