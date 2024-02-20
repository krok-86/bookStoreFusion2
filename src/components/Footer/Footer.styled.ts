import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .footer {
    display: flex;
    flex-direction: column;
    background: #0d1821;
    width: 320px;
    flex-shrink: 0;
  }
  .logo-footer {
    padding-bottom: 30px;
  }
  .content-block {
    padding-left: 20px;
  }
  .content-block-second {
    padding-top: 40px;
  }
  .content {
    padding-top: 73px;
    padding-bottom: 30px
  }
  .content-text {
    color: var(--light, #f0f4ef);
    text-decoration: none;
  }
  .content-block-third {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right:20px;
  }
  .map {
    display: flex;
    align-self: center;
    margin-bottom: 30px;
    width: 291px;
    flex-shrink: 0;
    border-radius: 6px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    position: absolute;
    top: -100px;
  }

  .map-wrap {
      overflow: hidden;
      position: relative;
      border-radius: 6px;
      width: 281px;
      height: 160px;
    }
    .map {
      width: 100%;
      height: auto;
    }

  @media (min-width: 834px) {
    .footer {
      width: 100%;
    }
    .content {
      padding-top: 73px;
    }
    .content-block-second {
      padding-top: 73px;
    }
    .content-block-third {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding:0px;
      padding-top: 73px;
      padding-bottom: 79px;
    }
    .content-block {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding: 20px;
    }
    .map-wrap {
      width: 392px;
      height: 160px;
      border-radius: 6px;
  }
}
  @media (min-width: 1280px) {
    .content-block-third {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
    .content-block {
      align-items: start;
      padding: 20px;
      width: 1280px;
      height: 341px;
      margin-left: auto;
      margin-right: auto;
    }

    .logo-footer {
      padding-bottom: 30px;
    }
    .content-block-second {
      padding-top: 63px;
      padding-bottom: 40px;
    }
    .content {
      padding-top: 63px;
    }
    .content-text {
      color: var(--light, #f0f4ef);
      text-decoration: none;
    }
    .content-block-third {
      padding-top: 63px;
    }
    .map-wrap {
      width: 413px;
      height: 160px;
      border-radius: 6px;
      /* flex-shrink: 0;
      overflow: hidden;
      position: relative; */
    }
    /* .map {
      width: 100%;
      height: auto;
    } */
  }
`;
export default FooterStyled;
