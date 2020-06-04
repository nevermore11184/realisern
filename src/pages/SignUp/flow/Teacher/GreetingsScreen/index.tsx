import React from 'react';
import {View, Text, Platform} from 'react-native';
import SignUpTeacherWalker from '../../../SignUpTeacherWalker';
import TeacherLogo from '../../../../../assets/icons/TeacherLogo';
import i18n from '../../../../../config/locales/customisation';

import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../../../navigation/RootNavigation';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamsList,
  'GreetingsScreen'
>;

interface Props {
  navigation: NavigationScreenProp;
}

const teacherLogoParams = {
  width: Platform.OS === 'ios' ? 230 : 200,
  height: Platform.OS === 'ios' ? 520 : 350,
};

const GreetingsScreen: React.FC<Props> = props => {
  const bottomNavigatorFunction = () => {
    const {navigation} = props;
    navigation.navigate('SignUpTeacher', {screen: 'CredentialsFormScreen'});
  };
  return (
    <SignUpTeacherWalker
      bottomBarText="I'am ready >"
      multiBottomBarContent={false}
      navigatorFunction={bottomNavigatorFunction}
      bottomBarIncluded
      transparentFooter>
      <View style={styles.greetingsScreenWrapper}>
        <Text style={styles.title}>
          {i18n.t('signUpFlow.teacherFlow.firstScreen.welcome')}
        </Text>
        <Text style={styles.subTitle}>
          {i18n.t('signUpFlow.teacherFlow.firstScreen.pageContent')}
        </Text>
        <View style={styles.logoWrapper}>
          <TeacherLogo {...teacherLogoParams} />
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default GreetingsScreen;
