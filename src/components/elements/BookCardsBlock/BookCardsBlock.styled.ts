import styled from "styled-components";

const BookCardsBlockStyled = styled.div`
  .books-block {
    width: 100%;
    gap: 30px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .MuiPaginationItem-page {
    background-color: ${(props) => props.theme.colorTextButton};
    color: ${(props) => props.theme.colorTextButton};
    height: 13px;
    min-width: unset;
    width: 13px;
    border: 2px solid black;
    box-sizing: border-box;
    font-size: 0px;
    padding: 0px;
  }

  .Mui-selected {
    background-color: ${(props) => props.theme.colorBlack} !important;
    color: ${(props) => props.theme.colorBlack} !important;
  }
  .MuiPagination-ul {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 40px 0 0;
  }

.css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
  width: 5em !important;
  }

  @media (min-width: 834px) {
    .books-block {
      grid-template-columns: repeat(3, 1fr);
    }
    .MuiPagination-ul {
    padding: 60px 0 0;
  }
  }

  @media (min-width: 1280px) {
    .books-block {
      grid-template-columns: repeat(4, 1fr);
    }
    .MuiPagination-ul {
    padding: 78px 0 0;
  }
  }
`;

export default BookCardsBlockStyled;
