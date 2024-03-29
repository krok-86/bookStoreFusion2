import styled from 'styled-components';

const BookCardSmallStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .link-small-book-card {
    text-decoration: none;
  }
  .book-pic {
    border-radius: 16px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .book-pic-wrapper {
    width: 100%;
    border-radius: 16px;
    position: relative;
  }
  .book-card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    border-radius: 16px;
  }
  .book-title {
    color: #344966;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 21px;
    overflow: hidden;
  }
  .auth-title {
    font-family: "Poppins", sans-serif;
    color: #b9bac3;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .rate {
    font-size: 13px;
    font-weight: 500;
    color: #bfcc94;
  }
  .rate-number {
    font-family: "Poppins", sans-serif;
    color: #b9bac3;
    font-size: 13px;
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
  .anticon-star {
    svg {
      width: 15px;
      height: 15px;
    }
  }

  .rate-number {
    font-size: 13px;
    font-family: "Poppins", sans-serif;
  }

  @media (min-width: 834px) {
    .price {
      font-size: 16px;
      height: 49px;
    }
    .anticon-star {
      width: 35px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .rate-number {
      font-size: 16px;
    }
    .book-title {
    font-size: 16px;
    height: 25px;
    overflow: hidden;
  }
    .auth-title {
    font-size: 16px;
  }
  }

  @media (min-width: 1280px) {
    .price {
      font-size: 20px;
      height: 48px;
      font-family: "Poppins", sans-serif;
    }
    .anticon-star {
      width: 41px;
      svg {
        width: 26px;
        height: 26px;
      }
    }
    .rate-number {
      font-size: 16px;
    }
    .book-title {
    font-size: 20px;
    height: 30px;
    overflow: hidden;
  }
    .auth-title {
    font-size: 20px;
  }
  }
`;
export default BookCardSmallStyled;
