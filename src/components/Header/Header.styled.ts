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
width: 100%;
display: flex;
justify-content: space-between;
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
width: 135px;
}
.search {
    background-color: #f0f4ef;
    border: transparent;
    border-radius: 14px;
    padding-top: 13px;
    padding: 8px 10px;
    min-width: 290px;
}
.ant-input {
    background-color: #f0f4ef !important;
    border: none;
    outline: none !important;
}
.ant-input-search-button{
    background-color: #f0f4ef !important;
    border: none;
}

.search__desktop {
    display: none;
}

@media (min-width: 834px) {
    .nav-bar {
        /* display:flex;
        justify-content: center;
        align-items: center; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 50px;
        
    }
    .search__mobile {
        display: none;
    }
    .search__desktop {
        display: block;
    }
    .nav-title {
        font-size: 16px;
    }
    .button {
        width: 231px;
    }
}
`
export default HeaderStyled;