import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import i18n from '../../../../../../config/locales/customisation';
import SignUpTeacherWalker from '../../../../SignUpTeacherWalker';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import {styles} from './styles';
import ProgressBar from '../../components/ProgressBar';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'Confirmation'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Confirmation: React.FC<Props> = props => {
  const {navigation} = props;
  const goBack = () => {
    navigation.navigate('SignUpTeacher', {screen: 'Target'});
  };

  const onProceed = () => {
    navigation.navigate('SignUpTeacher', {screen: 'FinishScreen'});
  };

  return (
    <SignUpTeacherWalker
      bottomBarIncluded
      bottomBarText="< back"
      navigatorFunction={goBack}
      multiBottomBarContent={false}
      transparentFooter>
      <View style={styles.confirmationWrapper}>
        <View style={styles.progressBarWrapper}>
          <ProgressBar progress={50} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.standardText}>
            {i18n.t('signUpFlow.teacherFlow.confirmation.coreContent')}
            <Text style={styles.linkedText}>
              {i18n.t('signUpFlow.teacherFlow.confirmation.privacy')}
            </Text>
            <Text style={styles.standardText}>
              {i18n.t('signUpFlow.teacherFlow.confirmation.and')}
            </Text>
            <Text style={styles.linkedText}>
              {i18n.t('signUpFlow.teacherFlow.confirmation.termsConditions')}
            </Text>
          </Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableWithoutFeedback onPress={onProceed}>
            <View style={styles.agreeButton}>
              <Text style={styles.agreeButtonText}>
                {i18n.t('signUpFlow.teacherFlow.confirmation.agree')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goBack}>
            <View style={styles.disagreeButton}>
              <Text style={styles.disagreeButtonText}>
                {i18n.t('signUpFlow.teacherFlow.confirmation.notAgree')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default Confirmation;
