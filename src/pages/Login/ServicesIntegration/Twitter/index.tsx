import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LoginColors } from '../../constants';
import { ServicesIntegrationConstants } from '../constants';
import { servicesButtonBackground } from '../../utils';
import { styles } from '../styles';


const TwitterIntegration = () => (
  <TouchableHighlight style={{ ...styles.buttonContainer, backgroundColor: servicesButtonBackground(LoginColors, 'twitterButton') }}>
    <View style={styles.buttonWrapper}>
      <Icon style={styles.buttonIcon} size={23} color={LoginColors.white} name="twitter" />
      <View style={styles.buttonContent}>
        <Text style={styles.buttonInnerContent}>
          {ServicesIntegrationConstants.buttonContentTwitter}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default TwitterIntegration;
