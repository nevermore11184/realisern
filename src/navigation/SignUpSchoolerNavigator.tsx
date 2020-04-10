import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigation';
import {Dimensions} from 'react-native';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'SignUpSchool'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const StackNavigator = createStackNavigator<RootStackParamsList>();

const {width} = Dimensions.get('window');

const SignUpSchoolNavigator: React.FC<Props> = () => {
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
      {/*<StackNavigator.Screen*/}
      {/*  name="EmailConfirmation"*/}
      {/*  component={EmailConfirmation}*/}
      {/*/>*/}
      {/*<StackNavigator.Screen name="ResetPassword" component={ResetPassword} />*/}
      {/*<StackNavigator.Screen*/}
      {/*  name="ResetPasswordFinalScreen"*/}
      {/*  component={ResetPasswordFinalScreen}*/}
      {/*/>*/}
    </StackNavigator.Navigator>
  );
};

export default SignUpSchoolNavigator;
