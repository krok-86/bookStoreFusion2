import styled from "styled-components";

const UserProfileStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.avatar-wrap {
width: 290px;
height: 290px;
flex-shrink: 0;
border-radius: 16px;
background-color: pink;
position: relative;
}
.avatar {
width: 100%;
height: auto;
border-radius: 16px;
flex-shrink: 0;

/* flex-shrink: 0; */
}
.camera-wrap {
width: 290px;
height: 290px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
border: 2px solid white;
z-index: 2;
background-color: gray;
position: absolute;
}
.camera {
color: white;
/* margin: 20px; */
font-size: 20px;
/* background-position: bottom 20px right 20px; */
/* z-index: 3; */
position: absolute;
top: 10;
left: 10;
background-color: green;
}
.info-block {
    display: flex;
    justify-content: start;
    flex-direction: column;
}
.pers-title {
color: var(--dark, #0D1821);
font-size: 16px;
font-weight: 500;
}
.change-title {
font-size: 12px;
font-weight: 500;
}
.pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
export default UserProfileStyled;