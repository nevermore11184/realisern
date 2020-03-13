import React from 'react';
import { View, Text } from 'react-native';

import FacebookIntegration from './Facebook';

import { styles } from './styles';


const ServicesIntegration = () => (
  <View style={styles.servicesIntegrationWrapper}>
    <FacebookIntegration />
  </View>
);

export default ServicesIntegration;
