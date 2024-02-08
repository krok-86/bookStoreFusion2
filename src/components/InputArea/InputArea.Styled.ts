import styled from "styled-components";

const InputAreaStyled = styled.div`
color:  ${(props) => props.theme.backgroundColor};
.mail-icon {
    font-size: 24px;
    color: #b9bac3;
    margin-bottom: 16px;
    padding: 5px;
  }
  .input-area {//fix
    background-color: ${(props) => props.theme.backgroundColorStepper};
    color:  ${(props) => props.theme.backgroundColor};
    border-radius: 16px;
    border: none;
    overflow: hidden;
  }
`
export default InputAreaStyled;