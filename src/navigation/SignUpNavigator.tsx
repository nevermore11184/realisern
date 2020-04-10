import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigation';
import {Dimensions} from 'react-native';
import SignUpTeacherNavigator from './SignUpTeacherNavigator';
import SignUpSchoolerNavigator from './SignUpSchoolerNavigator';
import SignUp from '../pages/SignUp';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'SignUpNavigator'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const StackNavigator = createStackNavigator<RootStackParamsList>();

const {width} = Dimensions.get('window');

const SignUpNavigator: React.FC<Props> = () => {
  /** specifying properties for SignUp screens flow */
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
      <StackNavigator.Screen name="SignUpHome" component={SignUp} />
      <StackNavigator.Screen
        name="SignUpSchool"
        component={SignUpSchoolerNavigator}
      />
      <StackNavigator.Screen
        name="SignUpTeacher"
        component={SignUpTeacherNavigator}
      />
    </StackNavigator.Navigator>
  );
};

export default SignUpNavigator;
