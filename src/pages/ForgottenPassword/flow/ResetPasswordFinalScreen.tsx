import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../navigation/RootNavigation';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../styles';
import assets from '../../../assets/images';
import LogoIcon from '../../../assets/icons/LogoIcon';
import ResetPasswordIcon from '../../../assets/icons/ResetPasswordIcon';
import i18n from '../../../config/locales/customisation';
import StandardButton from '../../../components/StandardButton';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'ResetPasswordFinalScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const ResetPasswordFinalScreen = (props: Props) => {
  const {navigation} = props;

  const onLoginRedirect = () => navigation.navigate('Login');

  return (
    <ImageBackground
      style={styles.forgottenPasswordBackground}
      source={assets.background}>
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <LogoIcon />
        </View>
        <View style={styles.iconWrapper}>
          <ResetPasswordIcon />
        </View>
        <Text style={styles.thirdScreenTitle}>
          {i18n.t('loginFlow.resetPassword.thirdStep.title')}
        </Text>
        <StandardButton onPress={onLoginRedirect} title="LOGIN" />
      </View>
    </ImageBackground>
  );
};

export default ResetPasswordFinalScreen;
