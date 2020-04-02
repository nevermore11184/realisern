import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import EmailConfirmation from '../pages/ForgottenPassword/pages/EmailConfirmation';

import {setHeaderOptions} from './utils';
import ResetPassword from '../pages/ForgottenPassword/pages/ResetPassword';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  ForgottenPassword: {screen: string};
  EmailConfirmation: undefined;
  ResetPassword: undefined;
};

const StackNavigator = createStackNavigator<RootStackParamsList>();

const currentWidth = Dimensions.get('window').width;

const RootNavigation: React.FC = () => {
  type NavigationScreenProp = StackNavigationProp<
    RootStackParamsList,
    'ForgottenPassword'
  >;

  interface Props {
    navigation: NavigationScreenProp;
  }
  const ForgottenPasswordNavigator: React.FC<Props> = () => {
    // nester navigation for forgotten password procedures
    return (
      <StackNavigator.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerTitleStyle: {
            textAlign: 'center',
            justifyContent: 'center',
            width: currentWidth,
          },
        }}>
        <StackNavigator.Screen
          name="EmailConfirmation"
          component={EmailConfirmation}
        />
        <StackNavigator.Screen name="ResetPassword" component={ResetPassword} />
      </StackNavigator.Navigator>
    );
  };
  // root navigation
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerTitleStyle: {
            textAlign: 'center',
            justifyContent: 'center',
            width: currentWidth,
          },
        }}>
        <StackNavigator.Screen
          options={setHeaderOptions('Login')}
          name="Login"
          component={LoginPage}
        />
        <StackNavigator.Screen
          options={setHeaderOptions('Sign Up')}
          name="SignUp"
          component={SignUpPage}
        />
        <StackNavigator.Screen
          options={setHeaderOptions('Forgot password')}
          name="ForgottenPassword"
          component={ForgottenPasswordNavigator}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
