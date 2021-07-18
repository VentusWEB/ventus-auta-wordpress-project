import styled from "styled-components";

export const ButtonsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: auto;
    margin-right: 20px;
    grid-gap: 10px;
    button {
      margin-right: 20px;
    }
  }

 
`
export const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, 100%);
  }
`;
export const StyledBottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: ${({ theme }) => theme.colors.bottomNav}; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 1000;


      @media (min-width: ${({ theme }) => theme.device.m}) {
        justify-content: flex-end !important;
        grid-gap: 10px;
      }
`;
