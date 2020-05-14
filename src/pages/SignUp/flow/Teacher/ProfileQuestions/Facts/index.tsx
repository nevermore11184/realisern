import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProfilingQuestionsWrapper from '../ProfilingQuestionsWrapper';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'AcademicallyFocused'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Facts: React.FC<Props> = ({navigation}) => {
  const [factsValue, setFactsValue] = useState(0);
  const sliderFunction = (value: number) => {
    setFactsValue(value);
  };
  const rightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {
      screen: 'AcademicallyFocused',
      factsValue,
    });
  };
  const leftButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'IntermediaryInfoScreen'});
  };
  return (
    <ProfilingQuestionsWrapper
      screenName="facts"
      progress={75}
      bottomBarContent={{leftButton: '< back', rightButton: 'okay >'}}
      multi={true}
      leftButtonFunction={leftButtonFunction}
      rightButtonFunction={rightButtonFunction}
      callBackSliderFunction={sliderFunction}
    />
  );
};

export default Facts;
