import styled from 'styled-components';

const AuthNowStyled = styled.div`
  border-radius: 16px;
  background: #f0f4ef;
  width: 100%;
  height: 501px;
  margin: 70px 0;
  position: relative;
  overflow: visible;
  .auth-now-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .auth-now-img-fairy__wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .auth-now-img__fairy {
    width: 246px;
    height: 391px;
    position: absolute;
    top: -55px;
    right: -50px;
  }
  .auth-now-img__castle {
    width: 282px;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .fairy {
    transform: scaleX(-1);
    opacity: 0.2;
  }
  .auth-now-text {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
  }
  .auth-now-text__bold {
    font-size: 18px;
    font-weight: 700;
    margin-top: 0px;
  }

  .auth-now-text__normal {
    font-size: 14px;
  }
  .button-left {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    width: 67px;
    border-radius: 16px 0px 0px 16px;
    padding: 0 !important;
    text-align: right;
    font-family: "Poppins", sans-serif;
  }
  .button-right {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    width: 67px;
    border-radius: 0px 16px 16px 0px;
    padding: 0 !important;
    text-align: left;
    font-family: "Poppins", sans-serif;
  }
  :where(.css-dev-only-do-not-override-1qhpsh8).ant-btn-default {
    border-color: ${(props) => props.theme.backgroundColor};
  }
  @media (min-width: 834px) {
    width: 100%;
    min-width: 803px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    .button-left {
      width: 115px;
      height: 44px;
      font-family: "Poppins", sans-serif;
    }
    .button-right {
      width: 115px;
      height: 44px;
      font-family: "Poppins", sans-serif;
    }
    .auth-now-img__castle {
      width: 389px;
      height: 345px;
      position: absolute;
      bottom: 0;
      left: 39%;
      transform: translate(-80%, 0);
    }
    .auth-now-img__fairy {
      width: 377px;
      height: 599px;
      position: absolute;
      top: -75px;
      right: -30px;
    }
    .auth-now-text {
      position: absolute;
      top: 78px;
      left: 396px;
      width: 392px;
    }
    .auth-now-text__bold {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 22px;
    }
    .auth-now-text__normal {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 40px;
    }
    .fairy {
      transform: scaleX(-1);
      opacity: 0.2;
    }
    @media (min-width: 1280px) {
      width: 1280px;
      height: 400px;
      .auth-now-img__castle {
        width: 521px;
        height: 462px;
        position: relative;
        bottom: 30px;
        left: 7%;
        transform: translate(-80%, 0);
      }
      .auth-now-img__castle {
        width: 521px;
        height: 462px;
        position: absolute;
        bottom: 0;
        left: 39%;
        transform: translate(-80%, 0);
      }
      .auth-now-img__fairy {
        width: 478px;
        height: 759px;
        padding-left: 50px;
        top: -100px;
        right: 0px;
      }
      .auth-now-text {
        top: 69px;
        left: 739px;
        width: 415px;
      }
      .auth-now-text__bold {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 22px;
      }
      .auth-now-text__normal {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 40px;
      }
    }
  }
`;
export default AuthNowStyled;
