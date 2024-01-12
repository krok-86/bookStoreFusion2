import styled from "styled-components";

const BannerStyled = styled.div`
background-color: gray;
display: flex;
justify-content: center;
padding-top: 19px;
.banners {
display: flex;
width: 290px;
/* height: 505px; */
flex-direction: column;
justify-content: flex-start;
align-items: center;
flex-shrink: 0;
border-radius: 16px;
background: var(--light, #F0F4EF);
/* z-index: 1; */
}
.banner-first {
  height: 220px;
  position: relative;
}
.title-build {
color: var(--dark, #0D1821);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
z-index: 2;
position: relative;
}
.title-buy {
color: var(--dark-blue, #344966);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
z-index: 4;
position: relative;
}
.choose-button {
background-color: #344966;
color: white;
/* background-color: ${(props) => props.theme.colorPrimary};
color: ${(props) => props.theme.colorText}; */
border-radius: 16px;
background: var(--dark-blue, #344966);
/* z-index: 6; */
margin-top: 70px;
}
.banner-transp {
  position: absolute;
  top: 0;
  z-index: 1;
  right: -22px;
/* padding-bottom: 66px; */
}
.banner {

}
`
export default BannerStyled;