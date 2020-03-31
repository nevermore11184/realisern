import React, {useEffect} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Zocial';
import {GoogleSignin} from '@react-native-community/google-signin';
// @ts-ignore
import {WEB_GOOGLE_CLIENT_ID} from 'react-native-dotenv';
import {loginColors} from '../../constants';
import {servicesIntegrationConstants} from '../constants';
import {servicesButtonBackground} from '../../utils';
import {styles} from '../styles';

const GoogleIntegration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_GOOGLE_CLIENT_ID,
      offlineAccess: true,
      hostedDomain: '',
    });
  }, []);

  const signIn = async (): Promise<void> => {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signIn();
  };
  return (
    <TouchableHighlight
      activeOpacity={1}
      style={{
        ...styles.buttonContainer,
        backgroundColor: servicesButtonBackground(loginColors, 'googleButton'),
      }}
      onPress={signIn}>
      <View style={styles.buttonWrapper}>
        <Icon
          style={{...styles.buttonIcon}}
          size={23}
          color={loginColors.white}
          name="googleplus"
        />
        <View style={styles.buttonContent}>
          <Text style={styles.buttonInnerContent}>
            {servicesIntegrationConstants.buttonContentGoogle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GoogleIntegration;
