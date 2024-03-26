import styled from 'styled-components';

const InscriptionNewBookStyled = styled.div`
.book-new {
display: flex;
width: 113px;
height: 30px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 16px;
font-size: 10px;
background: #BFCC94;
color: #344966;
font-family: "Poppins", sans-serif;
position: absolute;
bottom: 16px;
left: 11px;
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
cursor: pointer;
border-radius: 50%;
}
`;
export default InscriptionNewBookStyled;
