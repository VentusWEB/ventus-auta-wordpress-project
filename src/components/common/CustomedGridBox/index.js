import styled from 'styled-components';

export const CustomedGridBox = styled.div`
display: grid;
grid-template-columns: 1fr;



@media (min-width: ${({ theme }) => theme.device.xxl}) {
  grid-template-columns: 1fr 1fr;

}
`;
