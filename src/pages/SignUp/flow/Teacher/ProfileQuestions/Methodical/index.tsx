import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProfilingQuestionsWrapper from '../ProfilingQuestionsWrapper';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'Methodical'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Methodical: React.FC<Props> = ({navigation}) => {
  const [methodicalValue, setMethodicalValue] = useState(0);
  const sliderFunction = (value: number) => {
    setMethodicalValue(value);
  };
  const onRightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {
      screen: 'Networking',
      methodicalValue,
    });
  };
  const onLeftButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'AcademicallyFocused'});
  };
  return (
    <ProfilingQuestionsWrapper
      screenName="methodical"
      progress={75}
      bottomBarContent={{leftButton: '< back', rightButton: 'okay >'}}
      multi={true}
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}
      callBackSliderFunction={sliderFunction}
    />
  );
};

export default Methodical;
