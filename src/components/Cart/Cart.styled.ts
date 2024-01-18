import styled from "styled-components";

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .total {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 500;
  }
  .total-number {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 700;
  }
  .total {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 290px;
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 500;
  }
  .total-number {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 700;
  }
  .button-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .countinue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 35px;
    padding: 10px 50px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    border: ${(props) => props.theme.borderButton};
    margin-top: 30px;
    margin-bottom: 18px;
  }
  .check-out {
    display: flex;
    width: 289px;
    height: 35px;
    padding: 10px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    margin-bottom: 100px;
  }
`;
export default CartStyled;
