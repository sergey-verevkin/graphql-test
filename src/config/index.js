import React from 'react';
import ReduxConfig from './Redux'

const Config = (props) => (
  <ReduxConfig>
    {props.children}
  </ReduxConfig>
);

export default Config
