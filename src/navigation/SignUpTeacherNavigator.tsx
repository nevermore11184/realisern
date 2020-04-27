import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigation';
import {Dimensions} from 'react-native';
import GreetingsScreen from '../pages/SignUp/flow/Teacher/GreetingsScreen';
import CredentialsFormScreen from '../pages/SignUp/flow/Teacher/CredentialsFormScreen';
import AddressFormScreen from '../pages/SignUp/flow/Teacher/AddressFormScreen';
import IntermediaryInfoScreen from '../pages/SignUp/flow/Teacher/IntermediaryInfoScreen';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'SignUpTeacher'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const StackNavigator = createStackNavigator<RootStackParamsList>();

const {width} = Dimensions.get('window');

const SignUpTeacherNavigator: React.FC<Props> = () => {
  /** specifying properties for SignUpTeacher screens flow */
  return (
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
        name="GreetingsScreen"
        component={GreetingsScreen}
      />
      <StackNavigator.Screen
        name="CredentialsFormScreen"
        component={CredentialsFormScreen}
      />
      <StackNavigator.Screen
        name="AddressFormScreen"
        component={AddressFormScreen}
      />
      <StackNavigator.Screen
        name="IntermediaryInfoScreen"
        component={IntermediaryInfoScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default SignUpTeacherNavigator;
