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

const AcademicallyFocused: React.FC<Props> = ({navigation}) => {
  const [academicalValue, setAcademicalValue] = useState(0);
  const sliderFunction = (value: number) => {
    setAcademicalValue(value);
  };
  const rightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {
      screen: 'AcademicallyFocused',
      academicalValue,
    });
  };
  const leftButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'Facts'});
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

export default AcademicallyFocused;
