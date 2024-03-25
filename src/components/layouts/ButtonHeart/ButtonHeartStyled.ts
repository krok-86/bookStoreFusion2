import styled from 'styled-components';

type ButtonHeartStyledType = {
  isFavorite: boolean;
};

const ButtonHeartStyled = styled.div<ButtonHeartStyledType>`
  .icon {
    color: white;
    font-size: 16px;
    position: absolute;
    top: 16;
    left: 16;
  }
  .icon-wrap {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorTextTitle};
    position: absolute;
    top: 20px;
    left: 20px;
    opacity: ${(props) => (props.isFavorite ? 1 : 0.7)};
    cursor: pointer;
    border-radius: 50%;

  }
  .icon-wrap:hover {
    opacity: 0.9;
  }
  @media (min-width: 834px) {
    .icon-wrap {
      width: 38.68px;
      height: 38.68px;
    }
    .icon {
      font-size: 20px;
    }
    @media (min-width: 834px) {
      .icon-wrap {
        width: 48px;
        height: 48px;
        top: 20px;
        right: 40px;
      }
      .icon {
        font-size: 26px;
      }
    }
  }
`;
export default ButtonHeartStyled;
