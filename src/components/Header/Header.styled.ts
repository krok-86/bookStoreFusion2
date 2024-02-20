import styled from "styled-components";

const HeaderStyled = styled.div`

.ant-input:focus {
  border: none;
  outline: none;
  box-shadow: none;
}

.ant-input-group-wrapper{
  height: 64px;
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
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 18px;
  }
  .button-left {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    width: 67px;
    border-radius: 16px 0px 0px 16px;
    padding: 0 !important;
    text-align: right;
  }
  .button-right {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    width: 67px;
    border-radius: 0px 16px 16px 0px;
    padding: 0 !important;
    text-align: left;
  }
  .buttons-auth-wrap {
    display: flex;
    border-radius: 16px;
    background-color: #344966;
    width: fit-content;
  }
  .search {
    background-color: #f0f4ef;
    border: transparent;
    border-radius: 14px;
    padding-top: 13px;
    padding: 16px 10px;
    min-width: 290px;
  }
  .ant-input {
    background-color: #f0f4ef !important;
    border: none;
    outline: none !important;
  }
  .ant-input-search-button {
    background-color: #f0f4ef !important;
    border: none;
  }

  .search__desktop {
    display: none;
  }
  .bage-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
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
    color: #344966;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }

  .ant-badge-count {
    box-shadow: 0 0 0 2px #bfcc94;
  }

  @media (min-width: 834px) {
    max-width: 1280px;
    margin: 0 auto;
    .nav-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
      img {
        width: 88px;
        height: 46px;
      }
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
  }

  @media (min-width: 1280px) {
    .button-right {
      width: 115px;
      height: 44px;
    }
    .button-left {
      width: 115px;
      height: 44px;
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
