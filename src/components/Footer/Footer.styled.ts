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
    /* height: 650px; */
    flex-shrink: 0;
  }
  .content-block {
    padding-left: 20px;
  }
  .logo-footer {
    padding-top: 73px;
    padding-bottom: 30px;
  }
  .nav-block {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .content {
    color: var(--light, #f0f4ef);
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
`;
export default FooterStyled;
