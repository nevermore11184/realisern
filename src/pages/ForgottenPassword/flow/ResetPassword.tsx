import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ImageBackground} from 'react-native';
import {RootStackParamsList} from '../../../navigation/RootNavigation';
import assets from '../../../assets/images';

import {styles} from '../styles';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'ResetPassword'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const ResetPassword: React.FC<Props> = () => {
  // const {navigation} = props;
  return (
    <ImageBackground
      style={styles.forgottenPasswordBackground}
      source={assets.background}>
      <View style={styles.wrapper}>
        <Text>{'reset'}</Text>
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;
