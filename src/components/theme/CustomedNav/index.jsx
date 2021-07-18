import React from 'react';
import PropTypes from "prop-types"
import DesktopNavMenu from "./DesktopNav"
import MobileNavMenu from "./MobileNav"


export const CustomedNav = ({ /* siteTitle,  */links }) => {

  return (
    <>
      <DesktopNavMenu links={links} />
      <MobileNavMenu links={links} />
    </>
  )
}
CustomedNav.propTypes = {
  siteTitle: PropTypes.string,
}

CustomedNav.defaultProps = {
  siteTitle: ``,
}

