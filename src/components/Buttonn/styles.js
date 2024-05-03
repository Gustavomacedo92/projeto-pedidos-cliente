import styled from "styled-components";

export const Butoon = styled.button`
display: flex;
width: 342px;
height: 68px;
justify-content: center;
align-items: center;
background: ${props => props.isBack ?  "rgba(255, 255, 255, 0.14)" : "#D93856"};
color: #FFF;
font-size: 17px;
line-height: 2.5px;
margin-bottom: 25px;
margin-top: 76px;
font-weight: 700;
outline: none;
cursor: pointer;
border: none;
&:hover{
    opacity: 0.9;
}
&:active {
    opacity: 0.7;
}
`;