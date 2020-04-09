import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LoginManager} from 'react-native-fbsdk';
import {styles} from '../styles';

import {loginColors} from '../../constants';
import {servicesButtonBackground} from '../../utils';
import i18n from '../../../../config/locales/customisation';

const FacebookIntegration = () => {
  const handleFacebookLogin = async (): Promise<void> => {
    await LoginManager.logInWithPermissions(['public_profile', 'email']);
  };

  Icon.loadFont();

  return (
    <TouchableHighlight
      onPress={handleFacebookLogin}
      style={{
        ...styles.buttonContainer,
        backgroundColor: servicesButtonBackground(
          loginColors,
          'facebookButton',
        ),
      }}>
      <View style={styles.buttonWrapper}>
        <Icon
          style={styles.buttonIcon}
          size={23}
          color={loginColors.white}
          name="facebook"
        />
        <View style={styles.buttonContent}>
          <Text style={styles.buttonInnerContent}>
            {i18n.t('loginFlow.social.buttonContentFacebook')}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default FacebookIntegration;
