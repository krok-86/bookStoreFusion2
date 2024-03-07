import styled from "styled-components";

const AvatarProfileStyled = styled.div`

  .avatar {
    position: relative;
  }
  .avatar-wrap {
    width: 290px;
    height: 290px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    left: 9px;
    overflow: hidden;
  }
  .avatar-img {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
  .avatar-img__small {
    width: 151px;
    height: 151px;
  }
  .camera-wrap {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorTextInput};
    position: absolute;
    bottom: 20px;
    left: 245px;
    cursor: pointer;
    border-radius: 50%;
    :hover {
      opacity: 0.9;
    }
  }
  .camera {
    color: ${(props) => props.theme.colorTextButton};
    font-size: 20px;
    position: absolute;
    top: 10;
    left: 10;
  }
  @media (min-width: 1280px) {
    .avatar-wrap {
      width: 305px;
      height: 305px;
    }
  }
`;
export default AvatarProfileStyled;
