import React, {ReactNode} from 'react';
import SignUpTeacherWalker from '../../../SignUpTeacherWalker';
import {Text, View} from 'react-native';
import {styles} from './styles';
import ProgressBar from '../components/ProgressBar';
import i18n from '../../../../../config/locales/customisation';
import ScaleSlider from '../../../../../components/ScaleSlider';
import NetworkingIcon from '../../../../../assets/icons/NetworkingIcon';
import TargetIcon from '../../../../../assets/icons/TargetIcon';

interface Props {
  screenName: string;
  progress: number;
  bottomBarContent: {leftButton: string; rightButton: string};
  multi: boolean;
  onLeftButtonFunction: () => void;
  onRightButtonFunction: () => void;
  callBackSliderFunction: (arg: number) => void;
  children?: ReactNode;
}

interface Icons {
  [p: string]: null | JSX.Element;
}

const ProfilingQuestionsWrapper: React.FC<Props> = ({
  screenName,
  progress,
  bottomBarContent,
  multi,
  onLeftButtonFunction,
  onRightButtonFunction,
  callBackSliderFunction,
  children,
}) => {
  const icons: Icons = {
    facts: null,
    academicallyFocused: null,
    methodical: null,
    networking: <NetworkingIcon width={150} height={160} />,
    target: <TargetIcon width={150} height={130} />,
  } as {[key: string]: null | JSX.Element};

  return (
    <SignUpTeacherWalker
      bottomBarContent={bottomBarContent}
      multiBottomBarContent={multi}
      bottomBarIncluded
      onLeftButtonFunction={onLeftButtonFunction}
      onRightButtonFunction={onRightButtonFunction}>
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
          <View style={styles.iconWrapper}>{icons[screenName]}</View>
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
      {children}
    </SignUpTeacherWalker>
  );
};

export default ProfilingQuestionsWrapper;
