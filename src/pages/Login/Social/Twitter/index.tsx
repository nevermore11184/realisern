import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {loginColors} from '../../constants';
import {servicesButtonBackground} from '../../utils';
import {styles} from '../styles';
import i18n from '../../../../config/locales/customisation';

const TwitterIntegration = () => (
  <TouchableHighlight
    style={{
      ...styles.buttonContainer,
      backgroundColor: servicesButtonBackground(loginColors, 'twitterButton'),
    }}>
    <View style={styles.buttonWrapper}>
      <Icon
        style={styles.buttonIcon}
        size={23}
        color={loginColors.white}
        name="twitter"
      />
      <View style={styles.buttonContent}>
        <Text style={styles.buttonInnerContent}>
          {i18n.t('loginFlow.social.buttonContentTwitter')}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default TwitterIntegration;
