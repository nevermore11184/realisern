import React from 'react';
import {Text, View} from 'react-native';
import Wrapper from '../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';
import ProgressBar from '../components/ProgressBar';

import {styles} from './styles';
import i18n from '../../../../../config/locales/customisation';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'IntermediaryInfoScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const IntermediaryInfoScreen: React.FC<Props> = () => {
  return (
    <Wrapper
      bottomBarContent={{leftButton: '', rightButton: 'okay >'}}
      multi
      bottomBarIncluded
      leftButtonFunction={() => 'temporarily'}
      rightButtonFunction={() => 'temporarily'}>
      <View style={styles.infoScreenContainer}>
        <ProgressBar progress={50} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {i18n.t('signUpFlow.teacherFlow.fourthScreen.title')}
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default IntermediaryInfoScreen;
