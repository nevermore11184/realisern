import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import {styles} from './styles';
import i18n from '../../config/locales/customisation';
import TeacherIcon from '../../assets/icons/TeacherIcon';
import SchoolerIcon from '../../assets/icons/SchoolerIcon';
import SignUpTeacherWalker from './SignUpTeacherWalker';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'SignUpHome'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const SignUp: React.FC<Props> = props => {
  const {navigation} = props;
  const onNavigateToFlow = (flowName: string) => () => {
    navigation.navigate('SignUpNavigator', {screen: flowName});
  };

  return (
    <SignUpTeacherWalker
      multiBottomBarContent={false}
      bottomBarIncluded={false}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{i18n.t('signUpFlow.homePage.title')}</Text>
        <View style={styles.innerWrapper}>
          <TouchableWithoutFeedback onPress={onNavigateToFlow('SignUpTeacher')}>
            <SafeAreaView style={styles.iconWrapper}>
              <TeacherIcon />
              <Text style={styles.iconText}>
                {i18n.t('signUpFlow.homePage.iconsTitle.teacher')}
              </Text>
            </SafeAreaView>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onNavigateToFlow('SignUpSchool')}>
            <View style={styles.iconWrapper}>
              <SchoolerIcon />
              <Text style={styles.iconText}>
                {i18n.t('signUpFlow.homePage.iconsTitle.school')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default SignUp;
