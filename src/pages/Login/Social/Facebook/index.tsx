import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from 'react-native-fbsdk';
import { ServicesIntegrationConstants } from '../constants';
import { styles } from '../styles';


import { LoginColors } from '../../constants';
import { servicesButtonBackground } from '../../utils';

const FacebookIntegration = () => {
  const handleFacebookLogin = (): void => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then((result) => {
      console.log(result, 'result');
    },
    (error) => {
      console.log(`login fail with error: ${error}`);
    });
  };

  Icon.loadFont();

  return (
    <TouchableHighlight
      onPress={handleFacebookLogin}
      style={{
        ...styles.buttonContainer,
        backgroundColor: servicesButtonBackground(LoginColors, 'facebookButton'),
      }}
    >
      <View style={styles.buttonWrapper}>
        <Icon style={styles.buttonIcon} size={23} color={LoginColors.white} name="facebook" />
        <View style={styles.buttonContent}>
          <Text style={styles.buttonInnerContent}>
            {ServicesIntegrationConstants.buttonContentFacebook}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default FacebookIntegration;
