import styled from "styled-components";

const PostStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
.post-area {
    background-color: gray;
    width: 290px;
}
.avatar-wrap {
    width: 290px;
    height: 290px;
    flex-shrink: 0;
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
    flex-shrink: 0;
  }
  .avatar-img__small {
    width: 151px;
    height: 151px;
  }
`
export default PostStyled