import styled from "styled-components";

const HeaderStyled = styled.div`
background-color: yellow;
.head-small {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
.nav-bar {
display: flex;
justify-content: space-evenly;
align-items: center;
padding-top: 33px;
}
.nav-title {
color: #000;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 18px;
}
.button {
background-color: #344966;
color: white;
/* background-color: ${(props) => props.theme.colorPrimary};
color: ${(props) => props.theme.colorText}; */
border-radius: 16px;
background: var(--dark-blue, #344966);
}
.search {
    background-color: #f0f4ef;
    border: transparent;
    border-radius: 14px;
    padding-top: 13px;
    padding-bottom: 20px;
    min-width: 290px;
}
`
export default HeaderStyled;