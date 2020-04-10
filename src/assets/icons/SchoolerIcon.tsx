import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const xml = `
   <svg width="52" height="57" viewBox="0 0 52 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9671 0L52 13.5529V19H0V13.5529L25.9671 0ZM38 25H46V44H38V25ZM0 57V49H52V57H0ZM22 25H30V44H22V25ZM6 25H14V44H6V25Z" fill="white"/>
   </svg>
`;

export default () => (
  <View>
    <SvgXml xml={xml} />
  </View>
);
