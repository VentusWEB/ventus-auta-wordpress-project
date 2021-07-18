import styled from 'styled-components';

export const ContentBox = styled.div`
    color:  ${({ theme }) => theme.colors.third};
    background:  ${({ theme }) => theme.colors.secondary};
    padding: 20px;
/*     margin: 10px; */
    line-height: ${({ theme }) => theme.lineHeight.l};

    em{
        color:  ${({ theme }) => theme.colors.primary};
    }

        ${({ secondary, theme }) =>
        secondary &&
        `         color:  ${theme.colors.secondary};
                   background: ${theme.colors.third}; 

                    em {
                        color: ${theme.colors.primaryLight};
                      }

                  `}

        ${({ small, theme }) =>
        small &&
        `        width: 90%;
                 margin: 10px auto;

                  `}
`;

