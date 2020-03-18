import React from 'react';
import { View } from 'react-native';

import FacebookIntegration from './Facebook';

import { styles } from './styles';


const Social = () => (
  <View style={styles.servicesIntegrationWrapper}>
    <FacebookIntegration />
  </View>
);

export default Social;
