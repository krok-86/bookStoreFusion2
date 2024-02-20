import styled from "styled-components";

const BannerStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 39px;
  padding-bottom: 100px;
  .banners {
    display: flex;
    width: 100%;
    min-width: 290px;
    height: 505px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    position: relative;
  }
  .banner-first {
    width: 220px;
    height: 140px;
    position: absolute;
    top: 17px;
    right: 0;
  }
  .title-build {
    color: ${(props) => props.theme.colorText};
    font-size: 18px;
    font-weight: 700;
    z-index: 2;
    margin: 0 0 20px 0;
  }
  .title-buy {
    color: ${(props) => props.theme.colorTextInput};
    font-size: 14px;
    font-weight: 500;
    z-index: 4;
    margin: 0px;
    width: 213px;
  }
  .choose-button {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    border-radius: 16px;
    margin-top: 20px;
  }
  .banner-transp {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-text {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .banner-woman {
    position: absolute;
    bottom: 0;
  }
  .ant-input {
    background-color: ${(props) => props.theme.backgroundColorStepper};
  }
  @media (min-width: 834px) {
    .banners {
      height: 289px;
    }
    .banner-text {
      top: 45px;
      left: 40px;
    }
    .banner-woman {
      right: 0px;
      height: 289px;
    }
    .title-build {
      font-size: 32px;
      margin-bottom: 15px;
    }
    .title-buy {
      font-size: 16px;
    }
    .choose-button {
      margin-top: 40px;
    }
    .banner-first {
      top: unset;
      left: 0;
      bottom: 0;
      width: 316px;
    }
  }
  @media (min-width: 1440px) {
    .banners {
      height: 400px;
    }
    .banner-woman {
      right: 98px;
      height: 400px;
    }
    .banner-text {
      top: 80px;
      left: 108px;
    }
    .title-build {
      font-size: 40px;
      margin-bottom: 10px;
    }
    .title-buy {
      font-size: 20px;
    }
    .choose-button {
      margin-top: 50px;
      width: 231px;
      height: 44px;
    }
  }
`;
export default BannerStyled;