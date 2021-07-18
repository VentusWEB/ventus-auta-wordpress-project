import styled, { css } from 'styled-components'

interface RowProps {
  margin: number
}

const Row = styled.div<RowProps>`
height: auto;
width: 100%;
overflow-x: scroll;
display: grid;
grid-row: 1;
/* grid-template-rows: 100px; */
grid-auto-flow: column;
/* padding-top: 20px; */
background-color: var(--overflox-x-bg);
position: absolute;
align-items: baseline;
  ${(props) => {
    return css`
      margin-right: ${props.margin}px;
      margin-left: ${props.margin}px;
    `
  }}
`
export default Row
