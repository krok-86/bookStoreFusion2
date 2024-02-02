import styled from "styled-components";

const BookCardsBlockStyled = styled.div`
  .books-block {
    width: 100%;
    gap: 30px 20px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
