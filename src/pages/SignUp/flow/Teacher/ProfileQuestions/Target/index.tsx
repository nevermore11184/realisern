import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProfilingQuestionsWrapper from '../ProfilingQuestionsWrapper';

type NavigationScreenProp = StackNavigationProp<RootStackParamsList, 'Target'>;

interface Props {
  navigation: NavigationScreenProp;
}

const Target: React.FC<Props> = ({navigation}) => {
  const [methodicalValue, setMethodicalValue] = useState(0);
  const sliderFunction = (value: number) => {
    setMethodicalValue(value);
  };
  const onRightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {
      screen: 'Confirmation',
      methodicalValue,
    });
  };
  const onLeftButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'Networking'});
  };
  return (
    <ProfilingQuestionsWrapper
      screenName="target"
      progress={75}
      bottomBarContent={{leftButton: '< back', rightButton: 'okay >'}}
      multi={true}
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}
      callBackSliderFunction={sliderFunction}
    />
  );
};

export default Target;
