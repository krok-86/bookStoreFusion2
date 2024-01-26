import styled from "styled-components";

const AvatarProfileStyled = styled.div`
 .camera-wrap {
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
    opacity: 0.6;
}
}
.camera {
color: white;
font-size: 20px;
position: absolute;
top: 10;
left: 10;
}
.ant-upload {
    border: none !important;
}
`;
export default AvatarProfileStyled;
