import styled from 'styled-components';

const CartListStyled = styled.div`
margin: 0 0px;
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
    color: black;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 14px;
  }
  .price-title {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
  .auth-title {
    font-family: "Poppins", sans-serif;
    color: black;
    font-size: 12px;
    font-weight: 500;
  }
  .increment-block {
    padding-top: 5px;
  }
  .button-sign {
    border: none;
    clip-path: circle(50%);
    height: 3em;
    width: 3em;
  }
  .ant-input-number-input {
    color: ${(props) => props.theme.colorText};
    border: none;
    max-width: 30px;
  }
  .sign {
    color: ${(props) => props.theme.colorText};
    background-color: white !important;
    font-size: 14px;
  }
  .ant-btn-default:hover {
    background-color: white !important;
  }
  .anticon {
    font-size: 16px;
    font-weight: 700;
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
    min-width: 834px;
    margin: 0 auto;
    .book-card {
      display: flex;
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
  .remove-title {
    font-size: 12px;
  }
  .auth-title {
    width: 100%;
    font-size: 20px;
  }
  .book-data {
    width: 100%;
    padding-left: 20px;
  }
  .price-title {
    font-size: 36px;
  }
  .price {
    width: 268px;
    height: 44px;
  }
  }
  @media (min-width: 1280px) {
    min-width: 1280px;
    margin: 0 auto;

    .remove-title {
    font-size: 14px;
  }
  .book-title {
    font-size: 40px;
  }
  .auth-title {
    font-size: 24px;
  }
}
`;
export default CartListStyled;
