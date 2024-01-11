import { FC } from "react";
import BannerStyled from "./Banner.styled";
import { Button } from "antd";
import { CHOOSE } from "../../constants";

const Banner:FC = () => {
 
    return (
  <BannerStyled>
    <div className = "banners">
  <img className = "banner-transp" src='/images/banner transp.jpg' />
  <div className = "title-build">Build your library with us</div>
  <div className = "title-buy">Buy two books and get one for free</div>
  <Button className = "choose-button">{CHOOSE}</Button>
  <img className = "banner" src='/images/banner.png' />
  </div>
  </BannerStyled>
    )
  }
  
  export default Banner;