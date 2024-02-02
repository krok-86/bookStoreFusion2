import styled from "styled-components";

const EmptyCartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .empty {
    color: var(--dark, #0d1821);
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colorText};
  }
  .title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 15px;
    padding-bottom: 30px;
  }
  .title {
    color: ${(props) => props.theme.colorTextTitle};
    font-size: 12px;
    font-weight: 500;
  }
  .go-button {
    display: flex;
    width: 289px;
    height: 35px;
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
  .cover-wrap {
    padding-bottom: 100px;
  }
`;
export default EmptyCartStyled;
