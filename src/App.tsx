/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';

import RootNavigation from './navigation/RootNavigation';
import AppHOC from './AppHOC';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RootNavigation />
  );
};

export default AppHOC(App);
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
