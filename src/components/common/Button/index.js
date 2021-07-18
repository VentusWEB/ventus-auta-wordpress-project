import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({ theme }) => theme.colors.third}; 
  

  background: ${({ theme }) => theme.colors.secondary}; 

  border-bottom: 8px solid  ${({ theme }) => theme.colors.primary}; 

  transition: 1s;

  &:hover{
    opacity: .75;
  }



  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary, theme }) =>
    secondary &&
    `
		background: transparent;
    border: 4px solid ${theme.colors.primary};
    border-bottom: 8px solid  ${theme.colors.primary};
	`}

  ${({ secondaryBlack, theme }) =>
    secondaryBlack &&
    `
  background: ${theme.colors.third};
  border: 4px solid ${theme.colors.primary};
  border-bottom: 8px solid  ${theme.colors.primary};
  color: ${theme.colors.secondary};
`}

  ${({ third, theme }) =>
    third &&
    `
      background: ${theme.colors.secondary}; 

      border-bottom: 8px solid  ${theme.colors.third}; 
    `}

    ${({ fourth, theme }) =>
    fourth &&
    `
        background: transparent;
        border: 4px solid ${theme.colors.secondary};
        border-bottom: 8px solid  ${theme.colors.third};
      `}

        ${({ back, theme }) =>
    back &&
    `
    color: ${theme.colors.secondary};
		background: transparent;
    border: 4px solid ${theme.colors.primary};
    border-bottom: 8px solid  ${theme.colors.secondary};
	`}
`;
