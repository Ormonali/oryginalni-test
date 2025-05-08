import * as React from "react";
import Svg, { Defs, Path, Stop, LinearGradient, RadialGradient } from 'react-native-svg';

const SvgIcon = () => (
  <Svg width="64" height="64" viewBox="0 0 64 64" >
  <Defs>
    <RadialGradient id="bellGradient" cx="50%" cy="80%" r="60%">
      <Stop offset="0%" stop-color="#a070e0" stop-opacity="0.6"/>
      <Stop offset="100%" stop-color="#9e78e8" stop-opacity="0.2"/>
    </RadialGradient>
    <LinearGradient id="clapperGradient" x1="0" y1="0" x2="0" y2="1">
      <Stop offset="0%" stop-color="#6d3af2"/>
      <Stop offset="100%" stop-color="#9a6cf5"/>
    </LinearGradient>
  </Defs>

  <Path d="M42,40a10,10 0 1,1 -20,0" fill="url(#clapperGradient)" />
  <Path d="M32 8c-6 0-12 5-12 15v10c0 3-1 5-3 6v2h30v-2c-2-1-3-3-3-6V23c0-10-6-15-12-15z" fill="url(#bellGradient)" />
</Svg>

);

export default SvgIcon;
