import React, {useEffect, useState} from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import { styles } from './styles';
import { LoginColors } from '../../constants';


const FacebookIntegration = () => {
  const [userInfo, setUserInfo] = useState({});

  Icon.loadFont();

  return (
    <TouchableHighlight
      style={styles.facebookButton}
      // onPress={loginWithFacebook}
    >
      <View style={styles.buttonContentWrapper}>
        <Icon style={styles.facebookIcon} size={30} color={LoginColors.white} name="facebook" />
        <Text style={styles.facebookTitle}>Login with Facebook</Text>
      </View>
    </TouchableHighlight>
  );
};

export default FacebookIntegration;
