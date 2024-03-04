import styled from "styled-components";

const PostListStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
    color: #344966;
    background-clip: padding-box;
    border: none;
    border-radius: 16px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    resize: vertical;
    background-color: #f0f4ef;
    padding-top: 20px;
    padding-left: 20px;

    &__wrapper {
      height: fit-content;
      background-color: #f0f4ef;
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
    color: white;
  }
  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;

    .user-data-area {
    width: 607px;
  }
  .post {
    width: 607px;
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

    .post-area {
    width: 738px;
  }
    .post-input {
      width: 718px;
  }
  }
`
export default PostListStyled;