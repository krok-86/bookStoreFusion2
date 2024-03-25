import styled from 'styled-components';

const PostListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 15px;
  flex-direction: column;
  .post-input-wrapper {
    background-color: gray;
  }
  .post-input {
    display: inline-table;
    outline: none;
    width: 269px;
    height: calc(2.25rem + 109px);
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    color: ${(props) => props.theme.colorTextInput};
    background-clip: padding-box;
    border: none;
    border-radius: 16px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    resize: vertical;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    padding-top: 20px;
    padding-left: 20px;

    &__wrapper {
      height: fit-content;
      background-color: ${(props) => props.theme.backgroundColorStepper};
      border-radius: 16px;
    }
  }
  .post-buttons-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 290px;
    margin: 30px auto 30px auto;
  }
  .post-save-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 38px;
    border-radius: 16px;
    background: #344966;
    color: ${(props) => props.theme.colorTextButton};
  }
  .post {
     padding-left: 50px;
     font-family: "Poppins", sans-serif;
    }
  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;

    .user-data-area {
      width: 607px;
    }
    .post {
      width: 607px;
      padding-left: 50px;
    }
    .post-area {
      width: 620px;
    }
    .post-input {
      width: 738px;
    }
    .post-input__wrapper {
      width: 607px;
    }
    .post-buttons-wrap {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
    }
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .post-area {
      width: 738px;
    }
    .post-input {
      width: 718px;
    }
    .post {
      padding-left: 50px;
    }
    .post-save-button {
      width: 276px;
      height: 50px;
    }
  }
`;
export default PostListStyled;
