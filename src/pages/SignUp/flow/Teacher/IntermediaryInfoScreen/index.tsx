import React from 'react';
import {Text, View} from 'react-native';
import SignUpTeacherWalker from '../../../SignUpTeacherWalker';
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

const IntermediaryInfoScreen: React.FC<Props> = ({navigation}) => {
  const onRightButtonFunction = (): void => {
    navigation.navigate('SignUpTeacher', {screen: 'Facts'});
  };
  return (
    <SignUpTeacherWalker
      bottomBarContent={{leftButton: '', rightButton: 'okay >'}}
      multiBottomBarContent
      bottomBarIncluded
      onLeftButtonFunction={() => 'temporarily'}
      onRightButtonFunction={onRightButtonFunction}>
      <View style={styles.infoScreenContainer}>
        <ProgressBar progress={50} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {i18n.t('signUpFlow.teacherFlow.fourthScreen.title')}
          </Text>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default IntermediaryInfoScreen;
