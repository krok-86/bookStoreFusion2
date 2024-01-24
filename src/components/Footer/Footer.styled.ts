import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .footer {
    display: flex;
    flex-direction: column;
    background: var(--dark, #0d1821);
    width: 320px;
    flex-shrink: 0;
  }
  .content-block {
    padding-left: 20px;
  }
  .logo-footer {
    padding-top: 73px;
    padding-bottom: 30px;
  }
  .content-block-second {
    padding-top: 73px;
    padding-bottom: 40px;
  }
  .content {
    color: var(--light, #f0f4ef);
    text-decoration: none;
  }
  .map {
    display: flex;
    align-self: center;
    margin-bottom: 30px;
    width: 291px;
    /* height: 160px; */
    flex-shrink: 0;
    border-radius: 6px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
  @media (min-width: 834px) {
    .footer {
      width: 100%;
    }
    .content-block {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    padding: 20px;
    }
  }
`;
export default FooterStyled;
