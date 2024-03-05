import styled from "styled-components";

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
    flex-shrink: 0;
    border-radius: 16px;
  }
  .book-title {
    color: #344966;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
  }
  .auth-title {
    color: #b9bac3;
    font-size: 14px;
    font-weight: 500;
  }
  .rate {
    font-size: 13px;
    font-weight: 500;
    color: #bfcc94;
  }  
  .rate-number {
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
  }

  @media (min-width: 1440px) {
    .price {
      height: 48px;
      font-family: "Poppins", sans-serif;
    }
    .anticon-star {
      width: 48px;
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;
export default BookCardSmallStyled;
