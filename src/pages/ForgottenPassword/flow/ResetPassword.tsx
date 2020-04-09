import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ImageBackground} from 'react-native';
import {RootStackParamsList} from '../../../navigation/RootNavigation';
import assets from '../../../assets/images';

import {styles} from '../styles';
import LogoIcon from '../../../assets/icons/LogoIcon';
import i18n from '../../../config/locales/customisation';
import FloatingTextInputField from '../../../components/FloatingTextInput';
import {resetPasswordsInputs} from './constants';
import StandardButton from '../../../components/StandardButton';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'ResetPassword'
>;

interface Props {
  navigation: NavigationScreenProp;
}

interface Input {
  name: string;
  title: string;
  secureTextEntry: boolean;
}

const ResetPassword: React.FC<Props> = (props: Props) => {
  const [localState, setLocalState] = useState({
    code: '',
    newPassword: '',
    confirmNewPassword: '',
  } as {[key: string]: string});

  const {navigation} = props;

  const onChangeField = (field: string) => (text: string): void => {
    setLocalState(prevState => ({
      ...prevState,
      [field]: text,
    }));
  };

  const onContinue = () => {
    navigation.navigate('ForgottenPassword', {
      screen: 'ResetPasswordFinalScreen',
    });
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
          <Text style={styles.forgottenPasswordTitle}>
            {i18n.t('loginFlow.resetPassword.secondStep.enterCode')}
          </Text>
          <View style={styles.inputWrapper}>
            {resetPasswordsInputs.map((input: Input) => {
              return (
                <View key={input.name} style={styles.inputItem}>
                  <FloatingTextInputField
                    value={localState[input.name]}
                    title={input.title}
                    secureTextEntry={input.secureTextEntry}
                    inputStyles={styles.textInput}
                    onChangeText={onChangeField(input.name)}
                    name={input.name}
                  />
                </View>
              );
            })}
            <StandardButton onPress={onContinue} title="RESET PASSWORD" />
            <View style={styles.bottomTextWrapper}>
              <Text style={styles.bottomText}>
                {i18n.t(
                  'loginFlow.resetPassword.secondStep.bottomHelpText.firstString',
                )}
              </Text>
              <Text style={styles.bottomText}>
                {i18n.t(
                  'loginFlow.resetPassword.secondStep.bottomHelpText.secondString',
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

//@ts-ignore
export default ResetPassword;
