import React from 'react';
import {View, Text} from 'react-native';
import Wrapper from '../../../../Wrapper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import ProgressBar from '../../components/ProgressBar';
import ScaleSlider from '../../../../../../components/ScaleSlider';
import {styles} from './styles';
import i18n from '../../../../../../config/locales/customisation';

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
      <View style={styles.majorWrapper}>
        <View style={styles.progressBarWrapper}>
          <ProgressBar progress={75} />
        </View>
        <View style={styles.sliderWrapper}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>
              {i18n.t('signUpFlow.teacherFlow.facts.contentTitle')}
            </Text>
            <Text style={styles.text}>
              {i18n.t('signUpFlow.teacherFlow.facts.contentText')}
            </Text>
          </View>
          <View style={styles.sliderTitleWrapper}>
            <Text style={styles.sliderTitle}>
              {i18n.t('signUpFlow.teacherFlow.facts.sliderTitle')}
            </Text>
          </View>
          <ScaleSlider min={1} max={5} LRpadding={4} single={true} />
        </View>
      </View>
    </Wrapper>
  );
};

export default Facts;
