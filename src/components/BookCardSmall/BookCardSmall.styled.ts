import styled from "styled-components";

const BookCardSmallStyled = styled.div`
  /*  */
  .book-card {
    margin-top: 50px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #eee3fb;
  }
  .book-pic {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
  .book-pic-wrap {
    background-color: green;
    border: 3px solid blue;
    width: 135px;
    height: 192px;
    flex-shrink: 0;
    border-radius: 16px;
    padding: 15px;
    background: url(<path-to-image>),
      lightgray -23.481px -57.894px / 135.654% 137.066% no-repeat;
  }
  .book-title {
    padding-top: 15px;
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
    width: 135px;
    height: 34px;   
    margin: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: var(--dark-blue, #344966);
    color: white;
  }
`;
export default BookCardSmallStyled;
