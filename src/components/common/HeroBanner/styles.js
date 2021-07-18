import styled from "styled-components"

export const HeroBannerBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
grid-gap: 2rem;
padding: 1rem 3rem;
text-align: center;
background: ${({ theme }) => theme.colors.third};
color: ${({ theme }) => theme.colors.third};
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: ${({ theme }) => theme.colors.secondary};
border: 4px solid ${({ theme }) => theme.colors.primary};
z-index: 10;

h3{
    font-size: 30px;
}

span{
    font-size: 26px;
}

`