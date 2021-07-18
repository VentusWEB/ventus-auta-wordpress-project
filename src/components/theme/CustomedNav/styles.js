import styled from 'styled-components'
import { ReactComponent as MobileLogo } from "assets/svgs/vt-logo-full.svg"
import { Link } from "gatsby"


/* Destkop */

export const StyledHeader = styled.header`
display: none;
@media (min-width: ${({ theme }) => theme.device.l}) {
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
/*   padding: 0.5rem; */
  transition: background 300ms;
  height: 5vh;
  background: ${({ theme }) => theme.colors.third};
 /*  background: ${({ background, theme }) => (background ? (theme.colors.primary) : "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%);")}; */

ul {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
/*       color: ${({ background, theme }) => (background ? theme.colors.secondary : theme.colors.primary)}; */
      transition: color 300ms;

        : hover {
        color: ${({ theme }) => theme.colors.hoverLinks};
      }
    }
  }
}
}
`

export const LogoBox = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
grid-gap: 10px;
text-transform: capitalize;
color: ${({ theme }) => theme.colors.secondary};
`

export const StyledMobileLogo = styled(MobileLogo)`
padding-top: 10px;
padding-left: 20px;
padding-bottom: 10px;

height: 8vh;

@media (min-width: ${({ theme }) => theme.device.l}) {
  transform: translate(0, 2.5vh);
}


path{
  fill: ${({ theme }) => theme.colors.secondary};
}

path:first-child{
  fill: ${({ theme }) => theme.colors.third};
}

`

export const ToggleWrapper = styled.label`
position: absolute;
top: 28px;
right: 294px;
z-index: 3;
@media(max-width: 414px) {
  top: 15px;
  right: auto;
  left: 16px;
}
  .react-toggle {
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
  .react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
  .react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}
  .react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4D4D4D;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
  .react-toggle: hover: not(.react-toggle--disabled).react-toggle-track {
  background-color: #000000;
}
  .react-toggle--checked.react-toggle-track {
  background-color: #000000;
}
  .react-toggle--checked: hover: not(.react-toggle--disabled).react-toggle-track {
  background-color: #000000;
}
  .react-toggle-track-check {
  display: flex;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle--checked.react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle-track-x {
  display: flex;
  align-items: center;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle--checked.react-toggle-track-x {
  opacity: 0;
}
  .react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50 %;
  background-color: #FAFAFA;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
  .react-toggle--checked.react-toggle-thumb {
  left: 27px;
  border-color: #4D4D4D;
}
  .react-toggle--focus.react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
  -moz-box-shadow: 0px 0px 3px 2px #0099E0;
  box-shadow: 0px 0px 2px 3px #0099E0;
}
  .react-toggle: active: not(.react-toggle--disabled).react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
  -moz-box-shadow: 0px 0px 5px 5px #0099E0;
  box-shadow: 0px 0px 5px 5px #0099E0;
}
`;