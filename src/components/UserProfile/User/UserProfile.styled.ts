import styled from "styled-components";

const UserProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .placeholder__empty{
    height: 281px;
    width: 100%;
  }
  .pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 20px;
  }
  .pers-title {
    color: #0d1821;
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .change-title {
    color: #8d9f4f;
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
  @media (min-width: 1280px) {
    width: 1280px;
    margin: 44px auto 0 auto;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 235px;
    height:calc(100vh - 530px);
    min-height: 800px;
    box-sizing: border-box;
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
    .pers-title {//
      font-size: 20px;
    }
  }
`;
export default UserProfileStyled;