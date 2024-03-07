import styled from "styled-components";

  const HeaderStyled = styled.div`
  margin: 0 15px;

  .ant-input:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
  .ant-input-group-wrapper {
    height: 48px;
  }
  .head-small {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 33px;
  }
  .nav-title {
    color: ${(props) => props.theme.colorBlack};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    padding: 18px;
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
  .buttons-auth-wrap {
    display: flex;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colorTextInput};
    width: fit-content;
  }
  :where(.css-dev-only-do-not-override-1qhpsh8).ant-btn-default {
    border-color: ${(props) => props.theme.colorTextInput};
}
  .search {
    background-color: ${(props) => props.theme.backgroundColorStepper};
    border: transparent;
    border-radius: 14px;
    padding-top: 13px;
    padding: 7px 10px;
    min-width: 290px;
  }
  .ant-input {
    background-color: ${(props) => props.theme.backgroundColorStepper} !important;
    border: none;
    outline: none !important;
  }
  .ant-input-search-button {
    background-color: ${(props) => props.theme.backgroundColorStepper} !important;
    border: none;
  }

  .search__desktop {
    display: none;
  }
  .bage-block {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .ant-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
  }

  .ant-scroll-number-only-unit {
    color: ${(props) => props.theme.colorTextInput};
    font-weight: 700;
  }

  .ant-badge-count {
    box-shadow: 0 0 0 2px #bfcc94;
  }

  .ant-space-item,
  .ant-badge,
  .ant-avatar {
    width: 32px;
    height: 32px;
  }

  .anticon {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 834px) {
    .nav-bar {
      display: grid;
      grid-template-columns: repeat(45, 1fr);
      gap: 50px;
      img {
        width: 88px;
        height: 46px;
      }
    }
    .search {
      padding: 16px 10px;
    }
    .search__mobile {
      display: none;
    }
    .search__desktop {
      display: block;
    }
    .nav-title {
      font-size: 16px;
    }
    .button {
      width: 231px;
    }
    .bage-block {
      margin: 16px 0 16px 16px;
    }
    .ant-space-item,
    .ant-badge,
    .ant-avatar {
      width: 40px;
      height: 40px;
    }

    .anticon {
      width: 26px;
      height: 26px;
    }
    .ant-input-group-wrapper {
      height: 64px;
    }
  }

  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
    .button-right {
      width: 115px;
      height: 44px;
      font-family: "Poppins", sans-serif;
    }
    .button-left {
      width: 115px;
      height: 44px;
      font-family: "Poppins", sans-serif;
    }
    .nav-bar {
      grid-template-columns: 89px 150px 530px 240px;
      gap: 0;
    }
    .nav-title {
      text-align: end;
    }
    .bage-block {
      margin: 16px 0px;
    }
  }
`;
export default HeaderStyled;
