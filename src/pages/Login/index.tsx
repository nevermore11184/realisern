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
import StandardButton from '../../components/StandardButton';

import {loginColors} from './constants';

import {styles} from './styles';
import LogoIcon from '../../assets/icons/LogoIcon';
import i18n from '../../config/locales/customisation';

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
    key: 'Login' | 'SignUpNavigator' | 'ForgottenPassword',
  ) => (): void => {
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
                    {i18n.t('loginFlow.rememberMe')}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                onPress={onScreenRedirect('ForgottenPassword')}
                style={styles.forgotPasswordText}>
                {i18n.t('loginFlow.forgotPassword')}
              </Text>
            </View>
            <StandardButton onPress={() => 'default'} title="LOGIN" />
            <View style={styles.divider}>
              <View style={styles.dividerBorder} />
              <Text style={styles.dividerContent}>
                {i18n.t('loginFlow.or')}
              </Text>
              <View style={styles.dividerBorder} />
            </View>
          </View>
          <Social />
          <View style={styles.forgottenPasswordWrapper}>
            <View style={styles.notMemberWrapper}>
              <Text style={styles.notMember}>
                {i18n.t('loginFlow.notMember')}
              </Text>
              <Text
                onPress={onScreenRedirect('SignUpNavigator')}
                style={styles.linkText}>
                {i18n.t('loginFlow.here')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginPage;
