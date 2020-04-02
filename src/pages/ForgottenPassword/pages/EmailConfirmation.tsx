import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ImageBackground} from 'react-native';
import {RootStackParamsList} from '../../../navigation/RootNavigation';
import assets from '../../../assets/images';
import FloatingTextInputField from '../../../components/FloatingTextInput';

import {styles} from '../styles';
import LogoIcon from '../../../assets/icons/LogoIcon';
import {resetPassword, resetPasswordText} from '../constants';
import StandardWhiteButton from '../../../components/StandardWhiteButton';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'EmailConfirmation'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const EmailConfirmation: React.FC<Props> = props => {
  const [forgottenAccountEmail, setForgottenAccountEmail] = useState('');
  const {navigation} = props;
  const onChangeEmail = (field: string): void => {
    setForgottenAccountEmail(field);
  };
  const onContinue = () => {
    navigation.navigate('ForgottenPassword', {screen: 'ResetPassword'});
  };

  return (
    <ImageBackground
      style={styles.forgottenPasswordBackground}
      source={assets.background}>
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <LogoIcon />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.forgottenPasswordTitle}>{resetPassword}</Text>
          <Text style={styles.forgottenPasswordText}>{resetPasswordText}</Text>
          <View style={styles.inputWrapper}>
            <FloatingTextInputField
              value={forgottenAccountEmail}
              title="Email"
              inputStyles={styles.textInput}
              onChangeText={onChangeEmail}
              name="emailConfirmation"
            />
          </View>
          <StandardWhiteButton onPress={onContinue} title="CONTINUE" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EmailConfirmation;
