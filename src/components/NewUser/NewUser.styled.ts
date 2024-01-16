import styled from "styled-components";

const NewUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: ${(props) => props.theme.backgroundColorPosts};
  max-width: 450px;  

  .user-text-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
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
  .ant-form-item-required {
    ::text {
      color: red;
    }
  }
  .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextPlaceHolder};
      opacity: 0.7;
    }
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
  .ant-input {
    background-color: ${(props) => props.theme.backgroundColorPost} !important;
    color: ${(props) => props.theme.colorTextInfo} !important;
    /* border-color: ${(props) => props.theme.borderAuthBefore} !important;
    border-color: ${(props) => props.theme.borderAuthAfter} !important; */
    &-affix-wrapper {
      background-color: ${(props) => props.theme.backgroundColorPost} !important;
    }
    &-password-icon {
      color: ${(props) => props.theme.colorTextInfo} !important;
  }
}
  .ant-form-item-label {
    label {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colorTextInfo};
    background-color: ${(props) => props.theme.colorTextInfo} !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px
      ${(props) => props.theme.backgroundColorPost};
  }
  .banner-wrap {
    width: 290px;
    height: 247px;
    flex-shrink: 0;
  }
  .banner {
    width: 100%;
  }
`;
export default NewUserStyled;
