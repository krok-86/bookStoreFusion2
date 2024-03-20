import styled from 'styled-components';

const CartStyled = styled.div`
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
  .total {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .total-number {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
  }
  .total {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 290px;
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .total-number {
    color: ${(props) => props.theme.colorText};
    font-size: 24px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
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
    /* padding: 10px 50px; */
    /* gap: 10px; */
    font-family: "Poppins", sans-serif;
    color: black;
    border-radius: 16px;
    border: ${(props) => props.theme.borderButton};
    margin-top: 30px;
    margin-bottom: 18px;
  }
  .check-out {
    display: flex;
    width: 290px;
    height: 35px;
    /* padding: 10px 50px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    /* gap: 10px; */
    
    border-radius: 16px;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    /* margin-bottom: 100px; */
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
  /* display: flex;
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
  } */
`;
export default CartStyled;
