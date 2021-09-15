import styled from 'styled-components';

export const SectionTitle = styled.div`

  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 20px 0;


  h4{
    text-transform: capitalize;
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media (min-width: ${({ theme }) => theme.device.m}) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    &::after {
        content: "";
        display: block;
        width: 100%;
        padding-top: 4px;
        border-bottom: 8px solid ${({ theme }) => theme.colors.third}; 
      }

  }


  ${({ secondary, theme }) =>
    secondary &&
    `
  text-align: right;
  h4{
    color: ${theme.colors.third}; 
  
    &::after {
        border-bottom: 8px solid ${theme.colors.secondary}; 
      }
  `
  }



  ${({ black, theme }) =>
    black &&
    `
text-align: right;
background: ${theme.colors.secondary}; 
h4{
  color: ${theme.colors.third}; 

  &::after {
      border-bottom: 8px solid ${theme.colors.primary}; 
    }
`
  }
}

  ${({ third, theme }) =>
    third &&
    `
    background: transparent;

    h4{
      color: ${theme.colors.primary}; 

      &::after {
          border-bottom: 8px solid ${theme.colors.third}; 
        }
    }

`}

  ${({ fourth, theme }) =>
    fourth &&
    `
  background: transparent;
  text-align: right; 
  h4{
    color: ${theme.colors.primaryLight};


    &::after {
        border-bottom: 8px solid ${theme.colors.secondary}; 
      }
  }

  `}

  ${({ fifth, theme }) =>
    fifth &&
    `
background: transparent;
padding: 0;
width: auto;

h4{
  color: ${theme.colors.primaryLight};


  &::after {
      border-bottom: 8px solid ${theme.colors.secondary}; 
    }
}

`}

${({ six, theme }) =>
    six &&
    `
background: ${theme.colors.third};
width: auto;
padding: 0;

h4{
color: ${theme.colors.primary};


&::after {
  border-bottom: 8px solid ${theme.colors.secondary}; 
}
}

`}
 
${({ productName, theme }) =>
    productName &&
    `
    background: ${theme.colors.secondary};
    width: auto;
    padding: 10px 0px;
    position: absolute;
    top: 0;
    width: 100%;

h4{
color: ${theme.colors.primary};

&::after {
  border-bottom: none; 
}
}

`}

`;
