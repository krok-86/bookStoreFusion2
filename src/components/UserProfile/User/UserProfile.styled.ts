import styled from "styled-components";

const UserProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */

  label {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    white-space: nowrap !important;
  }

  .ant-col{
    label {
      color: ${(props) => props.theme.colorTextTitle};
      margin-top: 7px;
    }
  }

  .ant-input-prefix {
    padding: 23px;
    position: absolute;
    top: -25px;
    z-index: 2;
  }

  .ant-input{
    margin-left: 70px;
  }

  .mail-icon {
    font-size: 24px;
    color: #b9bac3;
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
    font-family: 'Poppins', sans-serif;
  }
  .change-title {
    color: var(--dark_green, #8D9F4F);
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextPlaceHolder};
      opacity: 0.7;
    }
    input {
      background-color: #F0F4EF;
      border: none !important;
      /* height: 48px; */
      border-radius: 16px;
      color: var(--dark-blue, #344966);
      font-family: 'Poppins', sans-serif;
      width: 290px;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .ant-input-affix-wrapper {
    background-color: #F0F4EF;
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
    padding: 0 0 0 70px;
  }
  .ant-row {
    background-color: ${(props) => props.theme.backgroundColorStepper};
    width: 522px;
    border-radius: 16px;
  }

  .pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .button {
    background-color: #344966;
    color: white;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    border-radius: 16px;
    background: var(--dark-blue, #344966);
    width: 135px;
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
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    /* gap: 128px; */
    .avatar-wrap-prof {
      width: 305px;
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