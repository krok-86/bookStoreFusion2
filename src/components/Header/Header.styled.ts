import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: yellow;
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
    border-radius: 8px 0px 0px 8px;
    margin: -4px;
  }
  .button-right {
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    width: 67px;
    border-radius: 0px 8px 8px 0px;
  }
  .search {
    background-color: #f0f4ef;
    border: transparent;
    border-radius: 14px;
    padding-top: 13px;
    padding: 8px 10px;
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
    color: ${(props) => props.theme.colorTextButton};
    background-color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
  }
  @media (min-width: 834px) {
    .nav-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
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
`;
export default HeaderStyled;
