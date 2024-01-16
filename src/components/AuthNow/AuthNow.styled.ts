import styled from "styled-components";

const AuthNowStyled = styled.div`
border-radius: 16px;
background: var(--light, #F0F4EF);
/* background-color: ${(props) => props.theme.colorPrimary} */
width: 100%;
height: 501px;
margin: 70px 0;
position: relative;
overflow: hidden;
.auth-now-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.auth-now-img__fairy{
  width: 246px;
  height: 391px;
  position: absolute;
  top: -55px;
  right: -50px;
}
.auth-now-img__castle{
  width: 282px;
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.fairy {
  transform: scaleX(-1);
  opacity: 0.2;
}
.auth-now-text{
  position: absolute;
  top: 20px;
  left: 20px;
}
.auth-now-text__bold {
font-size: 18px;
font-weight: 700;
margin-top: 0px;
}

.auth-now-text__normal {
  font-size: 14px;
}

.auth-button {
  background-color: #344966;
  color: white;
  border-radius: 16px;
  background: var(--dark-blue, #344966);
  margin-top: 6px;
}
`
export default AuthNowStyled;