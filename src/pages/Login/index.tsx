import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  View, Text, Image, ImageBackground, TouchableOpacity, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamsList } from '../../navigation/RootNavigation';

import FloatingTextInputField from '../../components/FloatingTextInput';
import Social from './Social';

import { LoginConstants, LoginColors } from './constants';

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

  const { navigation } = props;

  return (
    <ImageBackground
      style={styles.wrapper}
      source={require('../../images/Rectangle.png')}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../images/Bitmap.png')} />
          <View style={styles.loginBlock}>
            <FloatingTextInputField
              attrName="email"
              title="Email"
              validationIconIncluded
              value={credentials.email}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('email')}
              animatedLabelStyles={animatedLabelStyles}
              dynamicInputStyles={dynamicInputStyles}
            />
            <FloatingTextInputField
              attrName="password"
              title="Password"
              value={credentials.password}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('password')}
              animatedLabelStyles={animatedLabelStyles}
              dynamicInputStyles={dynamicInputStyles}
              secureTextEntry
            />
            <View style={styles.extraCTA}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={onHandleCheckBox}
              >
                <View style={styles.rowWrapper}>
                  <View style={styles.checkBox}>
                    {rememberMe && <Icon style={{ fontWeight: 'bold' }} size={13} name="check" />}
                  </View>
                  <Text style={{ color: LoginColors.turquoise }}>
                    {LoginConstants.rememberMe}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text onPress={onSignUpRedirect} style={{ color: LoginColors.white }}>
                {LoginConstants.forgotPassword}
              </Text>
            </View>
            <View style={styles.divider}>
              <View style={styles.dividerBorder} />
              <Text style={styles.dividerContent}>{LoginConstants.or}</Text>
              <View style={styles.dividerBorder} />
            </View>
            <Button
              titleStyle={styles.loginTitleStyle}
              buttonStyle={styles.loginButtonStyle}
              onPress={() => 1}
              title="LOGIN"
            />
          </View>
          <Social />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginPage;
