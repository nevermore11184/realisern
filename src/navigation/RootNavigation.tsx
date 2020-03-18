import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

import { setHeaderOptions } from './utils';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
}

const StackNavigator = createStackNavigator<RootStackParamsList>();

const RootNavigation: React.FC = () => (
  <NavigationContainer>
    <StackNavigator.Navigator>
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
    </StackNavigator.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
