import styled from 'styled-components';

const EmptyCartFavoriteStyled = styled.div`
  margin: 0 15px;
  max-width: 1280px;
  .content-wrap {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
  .empty {
    color: #0d1821;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  .go-button {
    display: flex;
    width: 290px;
    height: 35px;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorTextButton};
    margin-bottom: 100px;
  }
  .cover-wrap {
    width: 290px;
    height: 176px;
  }
  .cover {
    width: 100%;
  }
  .content-text {
    color: ${(props) => props.theme.backgroundColorStepper};
    text-decoration: none;
  }
  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;
  .content-wrap {
    margin: 60px auto;
    display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row-reverse;
  }
  .title-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .cover-wrap {
    width: 350px;
    height: 212px;
  }
  .empty {
    font-size: 32px;
  }
  .title {
    font-size: 16px;
  }
  .go-button {
    width: 219px;
    height: 44px;
    font-size: 16px;
  }
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin: 0 auto;
  .cover-wrap {
    width: 433px;
    height: 261px;
  }
  .empty {
    font-size: 40px;
  }
  .title {
    font-size: 24px;
  }
  }
`;
export default EmptyCartFavoriteStyled;
