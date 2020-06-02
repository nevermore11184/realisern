import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import ForgottenPasswordNavigator from './ForgottenPasswordNavigation';
import SignUpNavigator from './SignUpNavigator';

import {setHeaderOptions} from './utils';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  ForgottenPassword: {screen: string};
  SignUpHome: undefined;
  SignUpTeacher: {
    screen: string;
    factsValue?: number;
    academicalValue?: number;
    methodicalValue?: number;
    networkingValue?: number;
  };
  SignUpSchool: undefined;
  SignUpNavigator: {screen: string};
  EmailConfirmation: undefined;
  ResetPassword: undefined;
  ResetPasswordFinalScreen: undefined;
  GreetingsScreen: undefined;
  CredentialsFormScreen: undefined;
  AddressFormScreen: undefined;
  IntermediaryInfoScreen: undefined;
  Facts: undefined;
  AcademicallyFocused: undefined;
  Methodical: undefined;
  Networking: undefined;
  Target: undefined;
  Confirmation: undefined;
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
