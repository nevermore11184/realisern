import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const xml = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 100 100"
    >
      <path
        fill="#83DE95"
        fillRule="evenodd"
        d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M70.361 33.595c.624-.628 1.342-.942 2.153-.942.812 0 1.53.314 2.154.942.561.565.842 1.272.842 2.12 0 .847-.28 1.553-.842 2.119L44.804 68.069l-.187.188-.187.189a2.709 2.709 0 01-2.106.942 2.709 2.709 0 01-2.107-.942L25.332 53.564c-.561-.566-.842-1.272-.842-2.12 0-.847.28-1.554.842-2.119.624-.628 1.342-.942 2.153-.942.812 0 1.53.314 2.154.942l12.638 12.716L70.36 33.595z"
        clipRule="evenodd"
      ></path>
    </svg>
`;

export default () => (
  <View>
    <SvgXml xml={xml} />
  </View>
);
