import styled from 'styled-components';

const PostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .post-area {
    background-color: ${(props) => props.theme.backgroundColorStepper};
    border-radius: 16px;
    width: 290px;
    margin-bottom: 20px;
  }
  .avatar-wrap {
    width: 35px;
    height: 35px;
    border-radius: 99px;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    margin: 10px 13px auto 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .avatar-img {
    width: 100%;
    height: auto;
    border-radius: 99px;
  }
  .avatar-img__small {
    width: 40px;
    height: 40px;
  }
  .user-data-area {
    display: flex;
    padding-bottom: 15px;
  }
  .user-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 6px;
  }
  .time-comment {
    color: ${(props) => props.theme.prefixInputColor};
    font-size: 10px;
  }
  .post {
    font-size: 12px;
    color: ${(props) => props.theme.colorTextInput};
    margin: auto auto 10px 10px;
  }
`;
export default PostStyled;
