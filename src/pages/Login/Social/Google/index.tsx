import React, { useEffect } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Zocial';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { LoginColors } from '../../constants';
import { ServicesIntegrationConstants } from '../constants';
import { servicesButtonBackground } from '../../utils';
import { styles } from '../styles';


const GoogleIntegration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '285670545046-ssdseouih07bbkq7vnipt2o5gidbuh28.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async (): Promise<void> => {
    try {
      await GoogleSignin.hasPlayServices();
      // const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <TouchableHighlight
      activeOpacity={0}
      style={{
        ...styles.buttonContainer,
        backgroundColor: servicesButtonBackground(LoginColors, 'googleButton'),
      }}
      onPress={signIn}
    >
      <View style={styles.buttonWrapper}>
        <Icon style={{ ...styles.buttonIcon, paddingTop: 13 }} size={23} color={LoginColors.white} name="googleplus" />
        <View style={styles.buttonContent}>
          <Text style={styles.buttonInnerContent}>
            {ServicesIntegrationConstants.buttonContentGoogle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GoogleIntegration;
