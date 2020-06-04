import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import i18n from '../../../../../../config/locales/customisation';
import SignUpTeacherWalker from '../../../../SignUpTeacherWalker';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../../navigation/RootNavigation';
import {styles} from './styles';
import ProgressBar from '../../components/ProgressBar';
import ConfirmationButton from './Button';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'Confirmation'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const Confirmation: React.FC<Props> = props => {
  const bottomNavigatorFunction = () => {
    const {navigation} = props;
    navigation.navigate('SignUpTeacher', {screen: 'Target'});
  };
  return (
    <SignUpTeacherWalker
      bottomBarIncluded
      bottomBarText="< back"
      navigatorFunction={bottomNavigatorFunction}
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
          <TouchableWithoutFeedback>
            <ConfirmationButton agree>
              {i18n.t('signUpFlow.teacherFlow.confirmation.agree')}
            </ConfirmationButton>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <ConfirmationButton agree={false}>
              {i18n.t('signUpFlow.teacherFlow.confirmation.notAgree')}
            </ConfirmationButton>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default Confirmation;
