import styled from "styled-components";

const UserProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    white-space: nowrap !important;
  }
  label::before {
    display: none !important;
  }
  .ant-col {
    label {
      color: ${(props) => props.theme.colorTextTitle};
      margin-top: 7px;
    }
  }
  .input-empty {
    height: 70px;
  }
  .ant-input-prefix {
    padding: 23px;
    position: absolute;
    top: -32px;
    z-index: 2;
  }

  .ant-input {
    margin-left: 70px;
  }

  .mail-icon {
    font-size: 24px;
    color: #b9bac3;
    margin-bottom: 10px;
  }
  .avatar {
    width: 100%;
    height: auto;
    border-radius: 16px;
    flex-shrink: 0;
  }
  .info-block {
    display: flex;
    justify-content: start;
    flex-direction: column;
  }
  .pers-title {
    color: var(--dark, #0d1821);
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .change-title {
    color: var(--dark_green, #8d9f4f);
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    text-decoration-line: underline;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
  .text-field {
    background-color: #f0f4ef  !important;
    border-radius: 16px;
    color: var(--dark-blue, #344966);
  }
  .text-field:hover {
        outline: none !important;
    }
  /* #f0f4ef */
  /* .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextPlaceHolder};
      opacity: 0.7;
    }
    input {
    background-color: #f0f4ef;
    border: none !important;
    border-radius: 16px;
    color: var(--dark-blue, #344966);
    
    width: 290px;
    font-size: 16px;
    font-weight: 400;
    }
  } */
  .ant-input-affix-wrapper {
    background-color: #f0f4ef;
    height: 48px;
    padding: 0px !important;
    border: none !important;
    border-radius: 16px;
    width: 290px;
    position: relative;
  }
  .input-text {
    font-size: 14px;
  }
  .ant-form-item-label {
    margin: 0 0 0 70px;
  }
  .ant-row {
    background-color: ${(props) => props.theme.backgroundColorStepper};
    width: 522px;
    border-radius: 16px;
  }
  .ant-input-outlined {
    background-color: ${(props) =>
      props.theme.backgroundColorStepper} !important;
  }
  .pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .button {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 16px;
    width: 135px;
    text-transform: capitalize;
  }
  .button:hover {
      background-color: ${(props) => props.theme.backgroundColor} !important;
    }
  .ant-upload {
    width: 38px !important;
    height: 38px !important;
    border-radius: 50%;
    margin: 0 !important;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    margin: 44px auto 100px auto;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 235px;
    .avatar-wrap-prof {
      width: 305px;
      position: relative;
    }
    .info-block {
      align-self: start;
      width: 522px;
    }
    .pers-title-wrap {
      display: flex;
      margin-bottom: 30px;
      align-items: center;
      justify-content: space-between;
    }
    .pers-title {
      font-size: 20px;
    }
    .ant-input-affix-wrapper {
      width: 522px;
      box-shadow: none !important;
      height: 35px;
    }
    .newUser-text {
      input {
        width: 522px;
        margin-left: 70px;
      }
    }
  }
`;
export default UserProfileStyled;
