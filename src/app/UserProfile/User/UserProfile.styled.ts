import styled from 'styled-components';

const UserProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .avatar-wrap-prof {
    padding-top: 50px;
      width: 305px;
      position: relative;
    }
    .pers-title-wrap {
      display: flex;
      padding-top: 370px;
      margin-bottom: 30px;
      align-items: center;
      justify-content: space-between;
    }
  .pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 20px;
  }
  .pers-title {
    color: ${(props) => props.theme.colorText};
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .change-title {
    color: ${(props) => props.theme.colorTextColor};
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    text-decoration-line: underline;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
  .pass-title {
    font-size: 14px;
    color:  ${(props) => props.theme.backgroundColor};
  }
  .button-prof {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 16px;
    width: 135px;
    text-transform: capitalize;
    margin-top: 50px;
  }
  .button-prof:hover {
      background-color: ${(props) => props.theme.backgroundColor} !important;
    }
  .ant-upload {
    width: 38px !important;
    height: 38px !important;
    border-radius: 50%;
    margin: 0 !important;
  }
  form {
    margin-bottom:20px;
  }
  @media (min-width: 834px) {
    display:flex;
    align-items: start;
    justify-content: center;
    max-width: 834px;
    margin: 0 auto;
    .pers-title-wrap {
      padding-top: 0px;
    }
    .info-block {
      padding-left: 320px;
      width:500px;
      margin: 0 auto;
    }
  form {
    margin-bottom:20px;
  }
  .avatar-wrap-prof {
     top: 40px;
    }
  }
  @media (min-width: 1280px) {
    min-height: 655px;
    width: 1280px;
    margin: 44px auto 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 0px;
    height:calc(100vh - 530px);
    box-sizing: border-box;
    .avatar-wrap-prof {
      top: 0px;
    }
    .info-block {
      padding-left: 175px;
    }
    .pers-title-wrap {
      display: flex;
      margin-bottom: 30px !important;
      align-items: center;
      justify-content: space-between;
    }
    .pers-title {
      font-size: 20px;
    }
  }
`;
export default UserProfileStyled;
