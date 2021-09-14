import React from 'react';
import Scroll from './Scroll';

const Tab = ({label, path}) =>
  <li>
    <Scroll type="id" element={path}>
      <a href={`#${path}`}>{label}</a>
    </Scroll>
  </li>

export default Tab;