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

  ${({ objectStyle, small, theme }) =>
  (small || objectStyle == 'small') &&
  `
  padding: 0.3rem 1rem;
  font-size: ${ theme.fontSize.s};
`}

${({ objectStyle, secondary, theme }) =>
(secondary || objectStyle == 'secondary') &&
    `
		background: transparent;
    border: 4px solid ${theme.colors.primary};
    border-bottom: 8px solid  ${theme.colors.primary};
	`}

  ${({ objectStyle, secondaryBlack, theme }) =>
    (secondaryBlack || objectStyle == 'secondaryBlack') &&
    `
  background: ${theme.colors.third};
  border: 4px solid ${theme.colors.primary};
  border-bottom: 8px solid  ${theme.colors.primary};
  color: ${theme.colors.secondary};
`}

  ${({ objectStyle, third, theme }) =>
  (third || objectStyle == 'third') &&
    `
      background: ${theme.colors.secondary}; 

      border-bottom: 8px solid  ${theme.colors.third}; 
    `}

    ${({ objectStyle, fourth, theme }) =>
    (fourth || objectStyle == 'fourth') &&
    `
        background: transparent;
        border: 4px solid ${theme.colors.secondary};
        border-bottom: 8px solid  ${theme.colors.third};
      `}

      ${({ objectStyle, back, theme }) =>
      (back || objectStyle == 'back') &&
    `
    color: ${theme.colors.secondary};
		background: transparent;
    border: 4px solid ${theme.colors.primary};
    border-bottom: 8px solid  ${theme.colors.secondary};
	`}
`;

export const NavButton = styled(Button)`
border: none;
background: transparent;
cursor: pointer;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.secondary};
font-size: ${({ theme }) => theme.fontSize.navButtons};

.current {
  color: red;
}


`;