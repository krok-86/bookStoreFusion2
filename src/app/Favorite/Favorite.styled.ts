import styled from 'styled-components';

const FavoriteStyled = styled.div`
  margin: 30px 15px 50px;
  .books-block {
    max-width: 1280px;
    margin: 0 auto;
  }
  .text {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding-bottom: 9px;
  }
  @media (min-width: 834px) {
    .text {
    font-size: 24px;
    padding-bottom: 14px;
  }
  }
  @media (min-width: 1280px) {
    .text {
    font-size: 28px;
    padding-bottom: 18px;
  }
  }
`;
export default FavoriteStyled;
