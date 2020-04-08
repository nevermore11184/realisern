import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ImageBackground} from 'react-native';

import i18n from '../../../config/locales/customisation';

import {RootStackParamsList} from '../../../navigation/RootNavigation';
import assets from '../../../assets/images';
import FloatingTextInputField from '../../../components/FloatingTextInput';

import {styles} from '../styles';
import LogoIcon from '../../../assets/icons/LogoIcon';
import StandardButton from '../../../components/StandardButton';
import {validateEmail} from '../../Login/utils';
import {loginExpression} from '../../Login/constants';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'EmailConfirmation'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const EmailConfirmation: React.FC<Props> = props => {
  const [forgottenAccountEmail, setForgottenAccountEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const {navigation} = props;

  const onChangeEmail = (field: string): void => {
    setForgottenAccountEmail(field);
  };
  const onContinue = () => {
    if (isButtonDisabled) {
      return;
    }
    navigation.navigate('ForgottenPassword', {screen: 'ResetPassword'});
  };

  useEffect(() => {
    setButtonDisabled(!validateEmail(forgottenAccountEmail, loginExpression));
  }, [forgottenAccountEmail]);

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
            {i18n.t('loginFlow.resetPassword.firstStep.resetPasswordTitle')}
          </Text>
          <Text style={styles.forgottenPasswordText}>
            {i18n.t('loginFlow.resetPassword.firstStep.resetPasswordText')}
          </Text>
          <View style={styles.inputWrapper}>
            <FloatingTextInputField
              value={forgottenAccountEmail}
              title="Email"
              validationIconIncluded
              inputStyles={styles.textInput}
              onChangeText={onChangeEmail}
              name="emailConfirmation"
            />
            <StandardButton
              disabled={isButtonDisabled}
              onPress={onContinue}
              title="CONTINUE"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

//@ts-ignore
export default EmailConfirmation;
