import styled from "styled-components";

const BookCardSmallStyled = styled.div`

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
    /* border: 3px solid blue; */
    width: 100%;
    flex-shrink: 0;
    border-radius: 16px;
  }
  .book-title {
    color: var(--dark-blue, #344966);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .auth-title {
    color: var(--dark_grey, #b9bac3);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .rate {
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #bfcc94;
  }
  .rate-number {
    color: var(--dark_grey, #b9bac3);
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
    background: var(--dark-blue, #344966);
    color: white;
  }
  @media (min-width: 834px) {

  }

  @media (min-width: 1440px) {

  }
`;
export default BookCardSmallStyled;
