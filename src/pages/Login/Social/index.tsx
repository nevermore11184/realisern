import React from 'react';
import {View} from 'react-native';

import FacebookIntegration from './Facebook';
import TwitterIntegration from './Twitter';
import GoogleIntegration from './Google';

import {styles} from './styles';

const Social = () => (
  <View style={styles.servicesIntegrationWrapper}>
    <FacebookIntegration />
    <TwitterIntegration />
    <GoogleIntegration />
  </View>
);

export default Social;
