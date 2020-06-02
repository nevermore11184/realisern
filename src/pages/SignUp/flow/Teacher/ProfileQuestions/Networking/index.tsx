import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProfilingQuestionsWrapper from '../ProfilingQuestionsWrapper';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'Networking'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Networking: React.FC<Props> = ({navigation}) => {
  const [networkingValue, setNetworkingValue] = useState(0);
  const sliderFunction = (value: number) => {
    setNetworkingValue(value);
  };
  const onRightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {
      screen: 'Target',
      networkingValue,
    });
  };
  const onLeftButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'Methodical'});
  };
  return (
    <ProfilingQuestionsWrapper
      screenName="networking"
      progress={75}
      bottomBarContent={{leftButton: '< back', rightButton: 'okay >'}}
      multi={true}
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}
      callBackSliderFunction={sliderFunction}
    />
  );
};

export default Networking;
