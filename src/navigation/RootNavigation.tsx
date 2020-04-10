import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import ForgottenPasswordNavigator from './ForgottenPasswordNavigation';
import SignUpNavigator from './SignUpNavigator';
import EmailConfirmation from '../pages/ForgottenPassword/flow/EmailConfirmation';
import ResetPassword from '../pages/ForgottenPassword/flow/ResetPassword';
import ResetPasswordFinalScreen from '../pages/ForgottenPassword/flow/ResetPasswordFinalScreen';

import {setHeaderOptions} from './utils';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  ForgottenPassword: {screen: string};
  SignUpHome: undefined;
  SignUpTeacher: undefined;
  SignUpSchool: undefined;
  SignUpNavigator: {screen: string};
  EmailConfirmation: undefined;
  ResetPassword: undefined;
  ResetPasswordFinalScreen: undefined;
  GreetingsScreen: undefined,
};

const StackNavigator = createStackNavigator<RootStackParamsList>();

const {width} = Dimensions.get('window');

const RootNavigation: React.FC = () => {
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
            width: width,
          },
        }}>
        <StackNavigator.Screen
          options={setHeaderOptions('Login')}
          name="Login"
          component={LoginPage}
        />
        <StackNavigator.Screen
          options={setHeaderOptions('Sign Up')}
          name="SignUpNavigator"
          component={SignUpNavigator}
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
