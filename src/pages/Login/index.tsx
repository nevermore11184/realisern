import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import assets from '../../assets/images';

import FloatingTextInputField from '../../components/FloatingTextInput';
import Social from './Social';

import {loginConstants, loginColors} from './constants';

import {dynamicInputStyles, animatedLabelStyles} from './utils';

import {styles} from './styles';
import LogoIcon from '../../assets/icons/LogoIcon';

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

const LoginPage: React.FC<Props> = props => {
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

  const onCredentialsChange = (field: string): CredentialsEventHandler => (
    event: string,
  ) => {
    setCredentials(
      (prevState: Credentials): Credentials => ({
        ...prevState,
        [field]: event,
      }),
    );
  };

  const {navigation} = props;

  return (
    <ImageBackground style={styles.wrapper} source={assets.background}>
      <ScrollView>
        <View style={styles.container}>
          <LogoIcon />
          <View style={styles.loginBlock}>
            <FloatingTextInputField
              name="email"
              title="Email"
              validationIconIncluded
              value={credentials.email}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('email')}
              animatedLabelStyles={animatedLabelStyles}
              dynamicInputStyles={dynamicInputStyles}
            />
            <FloatingTextInputField
              name="password"
              title="Password"
              value={credentials.password}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('password')}
              animatedLabelStyles={animatedLabelStyles}
              dynamicInputStyles={dynamicInputStyles}
              secureTextEntry
            />
            <View style={styles.extraCTA}>
              <TouchableOpacity activeOpacity={1} onPress={onHandleCheckBox}>
                <View style={styles.rowWrapper}>
                  <View style={styles.checkBox}>
                    {rememberMe && (
                      <Icon
                        style={styles.fontWeightBold}
                        size={13}
                        name="check"
                      />
                    )}
                  </View>
                  <Text style={{color: loginColors.turquoise}}>
                    {loginConstants.rememberMe}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                onPress={onSignUpRedirect}
                style={styles.forgotPasswordText}>
                {loginConstants.forgotPassword}
              </Text>
            </View>
            <View style={styles.divider}>
              <View style={styles.dividerBorder} />
              <Text style={styles.dividerContent}>{loginConstants.or}</Text>
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
