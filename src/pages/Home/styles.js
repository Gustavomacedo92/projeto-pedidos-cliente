import styled from "styled-components";

export const Container = styled.div`
width: 414px;
margin: auto;
background-color: black;
display: flex;
align-items: center;
flex-direction: column;
`;

export const Image = styled.img`
width: 342px;
height: 300px;
`;

export const ContainerIntes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 12px;
    color: wheat;
`;



export const InputLabel = styled.p`
color: #EEE;
margin-top: 41px;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
margin-left: 20px;
font-weight: 700;
`;

export const Input = styled.input`
display: flex;
padding: 19px 139px 18px 15px;
align-items: center;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
border: none;
outline: none;
cursor: pointer;
&:hover {
    opacity: 0.8;
}
`;



