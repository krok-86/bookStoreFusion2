import styled from "styled-components";

interface IInputAreaStyled {
  isError: boolean,
}

const InputAreaStyled = styled.div<IInputAreaStyled>`
color:  ${(props) => props.theme.backgroundColor};
.MuiFilledInput-root {
  background-color: transparent !important;
}
.mail-icon {
    font-size: 24px;
    color: #b9bac3;
    /* margin-bottom: 16px; */
    padding: 5px;
  }
  .input-area {
    background-color: ${(props) => props.isError ? 'cornsilk' : props.theme.backgroundColorStepper};
    color:  ${(props) => props.theme.backgroundColor};
    border-radius: 16px;
    border: ${(props) => props.isError ? '1px solid red' : '1px solid #f0f4ef'};
    overflow: hidden;
  }
  /* .Mui-error {
    background-color: ${(props) => props.isError ? 'red' : props.theme.backgroundColorStepper};
  } */
`
export default InputAreaStyled;