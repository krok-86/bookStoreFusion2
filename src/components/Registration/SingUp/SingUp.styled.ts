import styled from "styled-components";

const SingUpStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.backgroundColorPosts};
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  .user-text-wrap {
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
  }
  .user-header-wrap {
    display: flex;
    align-items: center;
  }
  .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    padding: 5px;
    color: ${(props) => props.theme.colorText};
  }
  .input-wrap {
    width: 413px;
  }
  .change-title {
    color: ${(props) => props.theme.colorTextTitle};
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 50px;
    padding-top: 60px;
  }
  .user-button {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    border-radius: 16px;
    width: 135px;
    margin: 5px;
  }
  .banner-wrap {
    width: 290px;
    height: 247px;
    flex-shrink: 0;
  }
  .banner {//
    width: 100%;
    transform: scale(-1, 1);
  }
  @media (min-width: 834px) {
    width: 100%;
    .user-form-wrapper {
      width: 100%;
    }
    .banner-wrap {
      width: 390px;
      height: 333px;
      margin-top: 90px;
    }
    .newUser-text {
      input {
        width: 392px;
        height: 64px;
      }
    }
  }
  @media (min-width: 1440px) {
    max-width: 1280px;
    .banner-wrap {
      width: 612px;
      height: 522px;
      margin-top: 30px;
    }
    .user-text {
      font-size: 40px;
      padding-bottom: 60px;
    }
    .user-text-wrap {
      display: flex !important;
      width: 100%;
    }
    /* .left-column {
    } */
    .right-column {
      width: 100%;
      max-width: 1280px;
      display: flex;
      justify-content: space-between;
    }
  }
`
export default SingUpStyled;
