import React from 'react';
import {View, Text} from 'react-native';
import Wrapper from '../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';
import ProgressBar from '../components/ProgressBar';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'AddressFormScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const AddressFormScreen: React.FC<Props> = () => {
  return (
    <Wrapper multi bottomBarIncluded>
      <ProgressBar progress={50} />
      <View>
        <Text>test</Text>
      </View>
    </Wrapper>
  );
};

export default AddressFormScreen;
