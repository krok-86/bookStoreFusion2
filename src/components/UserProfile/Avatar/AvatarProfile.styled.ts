import styled from "styled-components";

const AvatarProfileStyled = styled.div`

.avatar-img {
width: 100%;
height: auto;
border-radius: 16px;
flex-shrink: 0;

}
.avatar-wrap {
width: 290px;
height: 290px;
flex-shrink: 0;
border-radius: 16px;
/* position: relative; */
/* margin-bottom:20px; */

}
.avatar {
position: relative;  
}
.camera {
color: white;
font-size: 20px;
position: absolute;
top: 10;
left: 10;
}
.camera-wrap {
width: 38px;
height: 38px;
display: flex;
justify-content: center;
align-items: center;
/* z-index: 2; */
background-color: #344966;
position: absolute;
bottom: 20px; 
left: 245px;
cursor: pointer;
border-radius: 50%;
:hover{
    opacity: 0.9;
}
}
.ant-upload {
    border: none !important;
}

@media (min-width: 1280px) {
    .avatar-wrap {
        width: 305px;
        height: 305px;
    }
}
`;
export default AvatarProfileStyled;