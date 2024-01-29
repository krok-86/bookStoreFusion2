import styled from "styled-components";

const UserProfileStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* .avatar-wrap {
width: 290px;
height: 290px;
flex-shrink: 0;
border-radius: 16px;
background-color: red;
position: relative;
margin-bottom:20px;
}*/
.avatar-wrap-prof {
display: flex;
justify-content: center;
align-items: center;
height: 330px;
}
.avatar {
width: 100%;
height: auto;
border-radius: 16px;
flex-shrink: 0;

/* flex-shrink: 0; */
}
/* .camera-wrap {
width: 38px;
height: 38px;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
background-color: #344966;
position: absolute;
bottom: 10px;
right: 10px;
cursor: pointer;
border-radius: 50%;
:hover{
    opacity: 0.9;
}
} */
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
 cursor: pointer;
}
.pass-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.button {
background-color: #344966;
color: white;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.colorTextButton};
border-radius: 16px;
background: var(--dark-blue, #344966);
width: 135px;
}

.ant-upload {
    width: 38px !important;
    height: 38px !important;
    border-radius: 50%;
    margin: 0 !important;
}
`
export default UserProfileStyled;