import * as React from "react";
import Svg, { Circle, Path } from 'react-native-svg';

const SvgIcon = () => (
  <Svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
  >
    <Circle cx="21" cy="21" r="20" fill="#FBFBFC"></Circle>
    <Path
      fill="none"
      stroke="#5c6ac4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m17 14 7 7-7 7"
    ></Path>
  </Svg>
);

export default SvgIcon;
