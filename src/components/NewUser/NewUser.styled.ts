import styled from "styled-components";

const NewUserStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
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
    align-items: flex-start;
    /* flex-direction: column; */
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
  /* .ant-form-item-row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;   
    background-color: red;
    flex-flow: column-reverse nowrap!important;
  } */
  .ant-form-item-required {
    ::text {
      color: red;
    }
  }
  .input-text {
    font-size: 14px;
  }
  /* .ant-input-affix-wrapper {
    background-color: red;
  } */
  .mail-icon {
    font-size: 24px;
  }
  .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextPlaceHolder};
      opacity: 0.7;
    }
    input {
      background-color: #F0F4EF;
      border: none !important;
      height: 48px;
      border-radius: 16px;
      color: #B9BAC3;
      font-family: 'Poppins', sans-serif;
      width: 290px;
    }
  }
  .ant-input-affix-wrapper {
    background-color: #F0F4EF;
    height: 48px;
    padding: 0px !important;
    border: none !important;
    border-radius: 16px;
    width: 290px;
  }

  .ant-form-item-required {
    font-family: 'Poppins', sans-serif !important;
    color: #344966;
    margin-bottom: 40px;
  }

  .ant-form-item-row {
    flex-flow: column nowrap !important;
  }

  .ant-form-item-label {
    overflow: visible !important;
    white-space: nowrap !important;
  }

  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 50px;
  }

  .user-button {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    border-radius: 16px;
    width: 135px;
    margin: 5px;
  }
  .ant-form-item-label {
    label {
      color: #344966;
    }
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #B9BAC3;
    background-color: ${(props) => props.theme.colorTextInfo} !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #F0F4EF;
  }
  .banner-wrap {
    width: 290px;
    height: 247px;
    flex-shrink: 0;
  }
  .banner {
    width: 100%;
    transform: scale(-1, 1);
  }

  @media (min-width: 834px) {
    width: 100%;
    .user-form-wrapper{
      /* display: flex; */
      /* justify-content: space-between; */
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
    .ant-input-affix-wrapper {
      width: 392px;
      height: 64px;
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
    .newUser-text {
      input {
        width: 414px;
      }
      .ant-form-item-label {
        color: darkgreen;

      }
    }
    .ant-input-affix-wrapper {
      width: 414px;
    }
    .user-text-wrap {
      display: flex !important;
      width: 100%;
    /* justify-content: space-evenly; */
    /* align-items: center; */
    /* flex-direction: column; */
    }
    .left-column {
    }
    .right-column {
      width: 100%;
      max-width: 1280px;
      display: flex;
      justify-content: space-between;
    }

    .ant-input-prefix {
      width: 22px;
      margin: 0 24px;
      svg {
        width: 22px;
        color: #B9BAC3;
      }
    }
  }

`;
export default NewUserStyled;