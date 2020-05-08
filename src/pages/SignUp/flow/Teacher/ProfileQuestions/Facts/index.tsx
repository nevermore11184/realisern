import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Wrapper from '../../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProgressBar from '../../components/ProgressBar';
import Slider from '@react-native-community/slider';
import ScaleSlider from '../../../../../../components/ScaleSlider';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'IntermediaryInfoScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Facts: React.FC<Props> = () => {
  return (
    <Wrapper
      bottomBarContent={{leftButton: '', rightButton: 'okay >'}}
      multi
      bottomBarIncluded
      leftButtonFunction={() => 'temporarily'}
      rightButtonFunction={() => 'temporarily'}>
      <View>
        <ProgressBar progress={50} />
      </View>
      <View style={{width: '100%'}}>
        <ScaleSlider
          min={1}
          max={5}
          LRpadding={40}
          callback={() => 'test'}
          single={true}
        />
      </View>
    </Wrapper>
  );
};

export default Facts;
