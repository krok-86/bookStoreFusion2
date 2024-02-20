import styled from "styled-components";

const BookCardsBlockStyled = styled.div`
  .books-block {
    width: 100%;
    gap: 30px 20px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .MuiPaginationItem-page {
    background-color: white;
    color: white;
    height: 13px;
    min-width: unset;
    width: 13px;
    border: 2px solid black;
    box-sizing: border-box;
    font-size: 0px;
    padding: 0px;
  }

  .Mui-selected {
    background-color: black !important;
    color: black !important;
  }

  @media (min-width: 834px) {
    .books-block {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1440px) {
    .books-block {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default BookCardsBlockStyled;
