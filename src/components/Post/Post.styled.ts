import styled from "styled-components";

const PostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .post-area {
    background-color: #f0f4ef;
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
  /* .avatar-img__small {
    width: 151px;
    height: 151px;
  } */
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
    color: #b9bac3;
    font-size: 10px;
  }
  .post {
    font-size: 12px;
    color: #344966;
    margin: auto auto 10px 10px;
  }
  .post-input-wrapper {
    background-color: gray;
    
  }
  .post-input {
    display: inline-table;
  width: 269px;
  height: calc(2.25rem + 109px);
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colorTextPost};
  background-clip: padding-box;
  border: none;
  border-radius: 16px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
  background-color: #f0f4ef;
  /* margin: 30px auto 30px 35px; */
  padding-top: 20px;
  padding-left: 20px;

  &__wrapper {
    height: fit-content;
    background-color:  #f0f4ef;
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
  .post-save-button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 38px;
    border-radius: 16px;
    background: #344966;
    color: white;
  }
`;
export default PostStyled;
