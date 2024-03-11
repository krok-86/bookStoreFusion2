import styled from 'styled-components';

interface IInputAreaStyled {
  isError: boolean;
}

const InputAreaStyled = styled.div<IInputAreaStyled>`
color:  ${(props) => props.theme.backgroundColor};
.MuiFilledInput-root {
  background-color: transparent !important;
}
.mail-icon {
    font-size: 20px;
    color: #b9bac3;
    padding: 5px;
  }
  .input-area {
    background-color: ${(props) => (props.isError ? 'cornsilk' : props.theme.backgroundColorStepper)};
    color:  ${(props) => props.theme.backgroundColor};
    border-radius: 16px;
    border: ${(props) => (props.isError ? '1px solid red' : '1px solid #f0f4ef')};
    overflow: hidden;
  }
`;
export default InputAreaStyled;
