import styled from "styled-components";

const CartItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item-block {
    display: flex;
    border-bottom: 1px solid var(--light_grey, #d6d8e7);
  }
  .cover-wrap {
    width: 135px;
    flex-shrink: 0;
    margin: 10px;
  }
  .cover {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
  }
  .title-block {
  }
  .book-title {
    color: ${(props) => props.theme.colorText};
    font-size: 18px;
    font-weight: 700;
    padding-top: 10px;
  }
  .book-author {
    color: ${(props) => props.theme.colorText};
    font-size: 12px;
    font-weight: 500;
    padding-top: 14px;
  }
  .increment-block {
    padding-top: 13px;
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
    background-color: ${(props) => props.theme.backgroundColorStepper};
  }
  .price {
    padding-top: 14px;
  }
`;
export default CartItemStyled;
