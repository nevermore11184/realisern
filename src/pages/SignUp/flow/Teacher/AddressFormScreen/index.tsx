import React from 'react';
import {View, Text} from 'react-native';
import Wrapper from '../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'AddressFormScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const AddressFormScreen: React.FC<Props> = () => {
  return (
    <Wrapper
      multi={{value: true, buttons: {left: '< back', right: 'next >'}}}
      bottomBarIncluded>
      <View>
        <Text>test</Text>
      </View>
    </Wrapper>
  );
};

export default AddressFormScreen;
