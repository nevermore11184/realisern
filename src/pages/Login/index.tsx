import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import assets from '../../assets/images';

import FloatingTextInputField from '../../components/FloatingTextInput';
import Social from './Social';
import StandardWhiteButton from '../../components/StandardWhiteButton';

import {loginConstants, loginColors} from './constants';

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

  const onScreenRedirect = (
    key: 'Login' | 'SignUp' | 'ForgottenPassword',
  ): (() => void) => (): void => {
    navigation.navigate(key);
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
        <View
          style={{
            ...styles.container,
            paddingTop: Platform.OS === 'ios' ? '30%' : '10%',
          }}>
          <LogoIcon />
          <View style={styles.loginBlock}>
            <FloatingTextInputField
              name="email"
              title="Email"
              validationIconIncluded
              value={credentials.email}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('email')}
            />
            <FloatingTextInputField
              name="password"
              title="Password"
              value={credentials.password}
              inputStyles={styles.textInput}
              onChangeText={onCredentialsChange('password')}
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
                onPress={onScreenRedirect('ForgottenPassword')}
                style={styles.forgotPasswordText}>
                {loginConstants.forgotPassword}
              </Text>
            </View>
            <StandardWhiteButton onPress={() => 'default'} title="LOGIN" />
            <View style={styles.divider}>
              <View style={styles.dividerBorder} />
              <Text style={styles.dividerContent}>{loginConstants.or}</Text>
              <View style={styles.dividerBorder} />
            </View>
          </View>
          <Social />
          <View style={styles.forgottenPasswordWrapper}>
            {loginConstants.notMember(onScreenRedirect('SignUp'))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginPage;
