import styled from 'styled-components';

const FavoriteBookListStyled = styled.div`
.book-card {
    display: flex;
    justify-content: space-between;
    width: 290px;
    padding: 30px 0;
    border-bottom: 1px solid #D6D8E7;
  }
  .book-pic {
    border-radius: 16px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .book-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 135px;
  }
  .book-pic-wrapper {
    width: 135px;
    border-radius: 16px;
  }
  .book-title {
    color: #344966;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 14px;
  }
  .auth-title {
    font-family: "Poppins", sans-serif;
    color: #b9bac3;
    font-size: 14px;
    font-weight: 500;
  }
  .price {
    display: flex;
    width: 100%;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: #344966;
    color: white;
    font-family: "Poppins", sans-serif;
  }
  @media (min-width: 834px) {
    width: 100%;
    .book-card {
      display: flex;
    justify-content: flex-start;
    width: 100%;
  }
    .book-pic-wrapper {
    width: 255px;
  }

  .book-pic {
    height: 100%;
    width: 100%;
  }
  .book-pic-wrapper {
    width: 255px;
  }
  .book-title {
    width: 100%;
    font-size: 32px;
  }
  .auth-title {
    width: 100%;
    font-size: 32px;
  }
  .book-data {
    width: 100%;
    padding-left: 20px;
  }
  .price {
    width: 268px;
    height: 44px;
  }
  }
  @media (min-width: 1280px) {
  }
`;
export default FavoriteBookListStyled;
