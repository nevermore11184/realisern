import React from 'react';
import Wrapper from '../../../Wrapper';
import {Text, View} from 'react-native';
import {styles} from './Facts/styles';
import ProgressBar from '../components/ProgressBar';
import i18n from '../../../../../config/locales/customisation';
import ScaleSlider from '../../../../../components/ScaleSlider';

interface Props {
  screenName: string;
  progress: number;
  bottomBarContent: {leftButton: string; rightButton: string};
  multi: boolean;
  leftButtonFunction: () => void;
  rightButtonFunction: () => void;
  callBackSliderFunction: (arg: number) => void;
}

const ProfilingQuestionsWrapper: React.FC<Props> = ({
  screenName,
  progress,
  bottomBarContent,
  multi,
  leftButtonFunction,
  rightButtonFunction,
  callBackSliderFunction,
}) => {
  return (
    <Wrapper
      bottomBarContent={bottomBarContent}
      multi={multi}
      bottomBarIncluded
      leftButtonFunction={leftButtonFunction}
      rightButtonFunction={rightButtonFunction}>
      <View style={styles.majorWrapper}>
        <View style={styles.progressBarWrapper}>
          <ProgressBar progress={progress} />
        </View>
        <View style={styles.sliderWrapper}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>
              {i18n.t(`signUpFlow.teacherFlow.${screenName}.contentTitle`)}
            </Text>
            <Text style={styles.text}>
              {i18n.t(`signUpFlow.teacherFlow.${screenName}.contentText`)}
            </Text>
          </View>
          <View style={styles.sliderTitleWrapper}>
            <Text style={styles.sliderTitle}>
              {i18n.t(`signUpFlow.teacherFlow.${screenName}.sliderTitle`)}
            </Text>
          </View>
          <ScaleSlider
            callBackSliderFunction={callBackSliderFunction}
            min={1}
            max={5}
            LRpadding={4}
            single={true}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default ProfilingQuestionsWrapper;
