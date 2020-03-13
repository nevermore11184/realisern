import React, { useState, ReactElement } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  View, Text, Image, ImageBackground,
} from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamsList } from '../../navigation/RootNavigation';

import FloatingTextInputField from '../../components/FloatingTextInput';
import ServicesIntegration from "./ServicesIntegration";

import { LoginEnums, LoginColors } from './constants';

import { dynamicInputStyles, animatedLabelStyles } from './utils';

import { styles } from './styles';

type NavigationScreenProp = StackNavigationProp<RootStackParamsList, 'Login'>;

interface Props {
  navigation: NavigationScreenProp;
}

interface Credentials {
  email: string;
  password: string;
}

export interface CredentialsEventHandler {
  (argument: string): void;
}

const LoginPage: React.FC<Props> = (props) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const onSignUpRedirect = (): void => {
    navigation.navigate('SignUp');
  };

  const onHandleCheckBox = (): void => {
    setRememberMe((prevState: boolean) => !prevState);
  };

  const onCredentialsChange = (field: string): CredentialsEventHandler => (event: string) => {
    setCredentials((prevState: Credentials): Credentials => ({
      ...prevState,
      [field]: event,
    }));
  };

  const checkedIcon = (size: number, name: string, color: string): ReactElement => (
    <View style={styles.iconWrapper}>
      <Icon name={name} size={size} color={color} />
    </View>
  );

  const { navigation } = props;

  return (
    <ImageBackground
      style={styles.wrapper}
      source={require('../../images/Rectangle.png')}
    >
      <View style={styles.container}>
        <Image source={require('../../images/Bitmap.png')} />
        <View style={styles.loginBlock}>
          <FloatingTextInputField
            attrName="email"
            title="email"
            validationIconIncluded
            value={credentials.email}
            inputStyles={styles.textInput}
            onChangeText={onCredentialsChange('email')}
            animatedLabelStyles={animatedLabelStyles}
            dynamicInputStyles={dynamicInputStyles}
          />
          <FloatingTextInputField
            attrName="password"
            title="password"
            value={credentials.password}
            inputStyles={styles.textInput}
            onChangeText={onCredentialsChange('password')}
            animatedLabelStyles={animatedLabelStyles}
            dynamicInputStyles={dynamicInputStyles}
          />
          <View style={styles.extraCTA}>
            <View style={styles.rowWrapper}>
              <CheckBox
                checked={rememberMe}
                center
                iconRight
                // activeOpacity={1}
                wrapperStyle={styles.checkboxCustom}
                containerStyle={styles.checkboxCustom}
                iconType="material"
                checkedIcon={checkedIcon(14, 'check', 'black')}
                uncheckedIcon={checkedIcon(0, 'check', 'transparent')}
                checkedColor="black"
                onPress={onHandleCheckBox}
              />
              <Text style={{ color: LoginColors.turquoise }}>
                {LoginEnums.rememberMe}
              </Text>
            </View>
            <Text onPress={onSignUpRedirect} style={{ color: LoginColors.white }}>
              {LoginEnums.forgotPassword}
            </Text>
          </View>
          <View style={styles.divider}>
            <View style={styles.dividerBorder} />
            <Text style={styles.dividerContent}>OR</Text>
            <View style={styles.dividerBorder} />
          </View>
          <Button
            titleStyle={styles.loginTitleStyle}
            buttonStyle={styles.loginButtonStyle}
            onPress={() => 1}
            title="LOGIN"
          />
        </View>
        <ServicesIntegration />
      </View>
    </ImageBackground>
  );
};

export default LoginPage;
