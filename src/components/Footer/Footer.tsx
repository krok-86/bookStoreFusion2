import { FC } from "react";
import FooterStyled from "./Footer.styled";
import {
  ACCOUNT,
  ADDRESS,
  CART,
  CATALOG,
  EMAIL,
  HOME_PAGE,
  NUMBER,
  PHONE,
  URLS,
} from "../../constants";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="content-block">
          <div className="content-block-first">
          <img className="content" src="/images/logo footer.svg" />
          <div className="content-text">{EMAIL}</div>
          <div className="content-text">{PHONE}</div>
          </div>
          <div className="content-block-second">
          <Link to={URLS.MAIN_PAGE} className="content-text">
            <div className="content-text">{HOME_PAGE}</div>
            </Link>
            <Link to={URLS.AUTH} className="content-text">
            <div className="content-text">{CATALOG}</div>
            </Link>
            <Link to={URLS.PROFILE} className="content-text">
            <div className="content-text">{ACCOUNT}</div>
            </Link>
            <Link to={URLS.CART} className="content-text">
            <div className="content-text">{CART}</div>
            </Link>
          </div>
          <div className="content-block-third">
          <div className="content-text">{ADDRESS}</div>
          <div className="content-text">{NUMBER}</div>
        <div className="map-wrap">
        <img className="map" src="/images/map.png" />
        </div>
        </div>
        </div>
      </div>
    </FooterStyled>
  );
};
export default Footer;
