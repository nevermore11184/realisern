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
import Facts from '../pages/SignUp/flow/Teacher/ProfileQuestions/Facts';
import AcademicallyFocused from '../pages/SignUp/flow/Teacher/ProfileQuestions/AcademicallyFocused';
import Methodical from '../pages/SignUp/flow/Teacher/ProfileQuestions/Methodical';
import Networking from '../pages/SignUp/flow/Teacher/ProfileQuestions/Networking';
import Target from '../pages/SignUp/flow/Teacher/ProfileQuestions/Target';
import Confirmation from "../pages/SignUp/flow/Teacher/ProfileQuestions/Confirmation";
import FinishScreen from "../pages/SignUp/flow/Teacher/ProfileQuestions/FinishScreen";

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
      <StackNavigator.Screen name="Facts" component={Facts} />
      <StackNavigator.Screen
        name="AcademicallyFocused"
        component={AcademicallyFocused}
      />
      <StackNavigator.Screen name="Methodical" component={Methodical} />
      <StackNavigator.Screen name="Networking" component={Networking} />
      <StackNavigator.Screen name="Target" component={Target} />
      <StackNavigator.Screen name="Confirmation" component={Confirmation} />
      <StackNavigator.Screen name="FinishScreen" component={FinishScreen} />
    </StackNavigator.Navigator>
  );
};

export default SignUpTeacherNavigator;
