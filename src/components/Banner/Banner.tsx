import { FC } from "react";
import BannerStyled from "./Banner.styled";
import { Button } from "antd";
import { BUILD, BUY, CHOOSE } from "../../constants";

const Banner: FC = () => {
  return (
    <BannerStyled>
    <div className="banners">
      <div className="banner-first">
        <img className="banner-transp" src="/images/books.svg" />
        </div>
        <div className="banner-text">
          <p className="title-build">{BUILD}</p>
          <p className="title-buy">{BUY}</p>
          <Button className="choose-button">{CHOOSE}</Button>
        </div>
      <img className="banner-woman" src="/images/banner.png" />
    </div>
  </BannerStyled>
  );
};

export default Banner;
