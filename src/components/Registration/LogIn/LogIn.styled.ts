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
  /* .ant-form-item-required {
    ::text {
      color: red;
    }
  }
  .input-text {
    font-size: 14px;
  }
  .mail-icon {
    font-size: 24px;
  }
  .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextInput};
      opacity: 0.7;
    }
    input {
      background-color: #f0f4ef;
      border: none !important;
      height: 48px;
      border-radius: 16px;
      color: ${(props) => props.theme.colorTextInput};
      font-family: "Poppins", sans-serif;
      width: 290px;
    }
  }
  .ant-input-affix-wrapper {
    background-color: ${(props) => props.theme.backgroundColorStepper};
    height: 48px;
    padding: 0px !important;
    border: none !important;
    border-radius: 16px;
    width: 290px;
  }

  .ant-form-item-required {
    font-family: "Poppins", sans-serif !important;
    color: ${(props) => props.theme.colorTextInput};
    margin-bottom: 40px;
  }

  .ant-form-item-row {
    flex-flow: column nowrap !important;
  }

  .ant-form-item-label {
    overflow: visible !important;
    white-space: nowrap !important;
  } */

  .button-wrap {//
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 50px;
    padding-top: 60px;
  }

  .user-button {//
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    border-radius: 16px;
    width: 135px;
    margin: 5px;
  }
  /* .ant-form-item-label {
    label {
      color: ${(props) => props.theme.colorTextInput};
    }
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #b9bac3;
    background-color: ${(props) => props.theme.colorTextInfo} !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #f0f4ef;
  } */
  .banner-wrap {//
    width: 290px;
    height: 247px;
    flex-shrink: 0;
  }
  .banner {//
    width: 100%;
    transform: scale(-1, 1);
  }
  /* .ant-input-affix-wrapper,
  .ant-input-outlined,
  .ant-input-status-error,
  .input-text {
    background-color: ${(props) =>
      props.theme.backgroundColorStepper} !important;
  } */

  /* .ant-input-suffix {
    display: none;
  }
  .ant-row,
  .ant-col {
    flex-direction: column-reverse !important;
  }
  .ant-row {
    margin-bottom: 34px;
  }
  .ant-form-item-required {
    margin-bottom: 30px;
  } */
  @media (min-width: 834px) {
    width: 100%;
    .user-form-wrapper {//
      width: 100%;
    }
    .banner-wrap {//
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
    /* .ant-input-affix-wrapper {
      width: 392px;
      height: 64px;
    } */
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
    .banner-wrap {//
      width: 612px;
      height: 522px;
      margin-top: 30px;
    }
    .user-text {
      font-size: 40px;
      padding-bottom: 60px;
    }
    /* .newUser-text {
      input {
        width: 414px;
      }
      .ant-form-item-label {
        color: darkgreen;
      }
    }
    .ant-input-affix-wrapper {
      width: 414px;
    } */
    .user-text-wrap {
      display: flex !important;
      width: 100%;
    }
    .left-column {//
    }
    .right-column {//
      width: 100%;
      max-width: 1280px;
      display: flex;
      justify-content: space-between;
    }

    /* .ant-input-prefix {
      width: 22px;
      margin: 0 24px;
      svg {
        width: 22px;
        color: ${(props) => props.theme.prefixInputColor};
      }
    } */
  }
`;
export default SingUpStyled;
