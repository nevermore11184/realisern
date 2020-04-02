import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Button} from 'react-native';
import {RootStackParamsList} from '../../navigation/RootNavigation';

type NavigationScreenProp = StackNavigationProp<RootStackParamsList, 'SignUp'>;

interface Props {
  navigation: NavigationScreenProp;
}

const SignUp: React.FC<Props> = props => {
  const {navigation} = props;
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30%'}}>
      <Button
        title="Go back to Login screen"
        onPress={(): void => navigation.goBack()}
      />
    </View>
  );
};

export default SignUp;
