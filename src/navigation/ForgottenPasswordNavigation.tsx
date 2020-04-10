import React from 'react';
import EmailConfirmation from '../pages/ForgottenPassword/flow/EmailConfirmation';
import ResetPassword from '../pages/ForgottenPassword/flow/ResetPassword';
import ResetPasswordFinalScreen from '../pages/ForgottenPassword/flow/ResetPasswordFinalScreen';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigation';
import {Dimensions} from 'react-native';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'ForgottenPassword'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const StackNavigator = createStackNavigator<RootStackParamsList>();

const {width} = Dimensions.get('window');

const ForgottenPasswordNavigator: React.FC<Props> = () => {
  /** specifying properties for ForgottenPassword screens flow */
  // nested navigation for forgotten password procedures
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
        name="EmailConfirmation"
        component={EmailConfirmation}
      />
      <StackNavigator.Screen name="ResetPassword" component={ResetPassword} />
      <StackNavigator.Screen
        name="ResetPasswordFinalScreen"
        component={ResetPasswordFinalScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default ForgottenPasswordNavigator;
