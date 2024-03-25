import styled from 'styled-components';

const InscriptionBestsellerStyled = styled.div`

.book-bestceller {
display: flex;
width: 113px;
height: 30px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 16px;
font-size: 10px;
background: #344966;
color: white;
font-family: "Poppins", sans-serif;
position: absolute;
bottom: 16px;
left: 11px;
}
/* .icon {
color: white;
font-size: 16px;
position: absolute;
top: 16;
left: 16;
} */
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
export default InscriptionBestsellerStyled;
