import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  View, Text, Image, ImageBackground, TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamsList } from '../../navigation/RootNavigation';

import FloatingTextInputField from '../../components/FloatingTextInput';
import ServicesIntegration from './ServicesIntegration';

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
        <ServicesIntegration />
      </View>
    </ImageBackground>
  );
};

export default LoginPage;


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
// import 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen';
// import React, { useEffect } from 'react';
//
// import { View, Text } from 'react-native';
// import RootNavigation from './navigation/RootNavigation';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
// import AppHOC from './AppHOC';
//
// const App: React.FC = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//     GoogleSignin.configure({
//       webClientId: '742575099362-e8jm08hr96heo5ql13u1tru0jb0t9cd5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//       // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       // hostedDomain: '', // specifies a hosted domain restriction
//       // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//       // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//       // accountName: '', // [Android] specifies an account name on the device that should be used
//       // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     });
//   }, []);
// const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     // this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };
//   return (
//     <View>
//       <Text>test</Text>
//       <GoogleSigninButton onPress={signIn} />
//     </View>
//   );
// };
//
// export default AppHOC(App);
//
// import React, { Component } from 'react';
// import { View, Button } from 'react-native';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
//
// class Login extends Component {
//   handleFacebookLogin() {
//     LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//       'user_friends',
//     ]).then(
//       function(result) {
//         if (result.isCancelled) {
//           console.log('Login cancelled');
//         } else {
//           console.log(
//             'Login success with permissions: ' +
//               result.grantedPermissions.toString(),
//           );
//         }
//       },
//       function(error) {
//         console.log('Login fail with error: ' + error);
//       },
//     );
//   }
//   render() {
//     return (
//       <View style={{ marginTop: 300 }}>
//         <Button onPress={this.handleFacebookLogin} title='login with facebook' />
//       </View>
//     );
//   }
// }
//
// export default Login;
