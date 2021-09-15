import styled from 'styled-components';

export const Title = styled.div`


  width: 100%;

  h4{
    text-transform: capitalize;
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.l};

    &::after {
        content: "";
        display: block;
        width: 100%;
        padding-top: 4px;
        border-bottom: 8px solid ${({ theme }) => theme.colors.secondary}; 
      }

      ${({ secondary, theme }) =>
    secondary &&
    `
    color: ${theme.colors.primaryLight}; 
    
    &::after {
        border-bottom: 8px solid ${theme.colors.third}; 
      }
	`}

  }
 


`;
