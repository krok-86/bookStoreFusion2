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
} from "../../constants";

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
            <div className="content">{HOME_PAGE}</div>
            <div className="content">{CATALOG}</div>
            <div className="content">{ACCOUNT}</div>
            <div className="content">{CART}</div>
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
