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
          <img className="logo-footer" src="/images/logo footer.svg" />
          <div className="content">{EMAIL}</div>
          <div className="content">{PHONE}</div>
          </div>
          <div className="content-block-second">
          <Link to={URLS.MAIN_PAGE}>
            <div className="content">{HOME_PAGE}</div>
            </Link>
            <Link to={URLS.AUTH}>
            <div className="content">{CATALOG}</div>
            </Link>
            <Link to={URLS.PROFILE}>
            <div className="content">{ACCOUNT}</div>
            </Link>
            <Link to={URLS.CART}>
            <div className="content">{CART}</div>
            </Link>
          </div>
          <div className="content-block-third">
          <div className="content">{ADDRESS}</div>
          <div className="content">{NUMBER}</div>
        <img className="map" src="/images/map.png" />
        </div>
        </div>
      </div>
    </FooterStyled>
  );
};
export default Footer;
