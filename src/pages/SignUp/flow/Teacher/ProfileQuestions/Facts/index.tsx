import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Wrapper from '../../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProgressBar from '../../components/ProgressBar';
import Slider from '@react-native-community/slider';

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
      <View style={{width: '80%', paddingLeft: '3%', paddingRight: '3%'}}>
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        {/*<View style={{width: '100%', flexDirection: 'row'}}>*/}
        {/*  {[undefined, undefined, undefined, undefined, undefined].map(item => {*/}
        {/*    return (*/}
        {/*      <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', width: '20%', height: 15, backgroundColor: 'blue'}}>*/}
        {/*        <Text>test</Text>*/}
        {/*      </View>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</View>*/}
      </View>
    </Wrapper>
  );
};

export default Facts;
