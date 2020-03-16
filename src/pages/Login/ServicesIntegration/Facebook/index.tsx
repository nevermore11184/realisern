import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from 'react-native-fbsdk';
import { FaceBookConstants } from './constants';


import { styles } from './styles';
import { LoginColors } from '../../constants';


const FacebookIntegration = () => {
  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_friends',
    ]).then(
      (result: any) => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            `Login success with permissions: ${
              result.grantedPermissions.toString()}`,
          );
        }
      },
      (error: any) => {
        console.log(`Login fail with error: ${error}`);
      },
    );
  };

  Icon.loadFont();

  return (
    <TouchableHighlight
      style={styles.facebookButton}
      onPress={handleFacebookLogin}
    >
      <View style={styles.buttonContentWrapper}>
        <Icon style={styles.facebookIcon} size={30} color={LoginColors.white} name="facebook" />
        <Text style={styles.facebookTitle}>{FaceBookConstants.buttonContent}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default FacebookIntegration;
