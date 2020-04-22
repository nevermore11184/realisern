import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const xml = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      fill="none"
      viewBox="0 0 12 7"
    >
      <path
        fill="#fff"
        d="M11.429.714A.72.72 0 0010.714 0h-10A.72.72 0 000 .714c0 .19.078.369.212.503l5 5a.71.71 0 00.502.212.71.71 0 00.503-.212l5-5a.71.71 0 00.212-.503z"></path>
    </svg>
`;

export default () => (
  <View style={{position: 'absolute', left: '90%', top: '45%'}}>
    <SvgXml xml={xml} />
  </View>
);
