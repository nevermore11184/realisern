import React from 'react';
import {View, Text} from 'react-native';
import Wrapper from '../../../Wrapper';
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

const GreetingsScreen: React.FC<Props> = props => {
  const bottomNavigatorFunction = () => {
    const {navigation} = props;
    navigation.navigate('SignUpTeacher', {screen: 'CredentialsFormScreen'});
  };
  return (
    <Wrapper
      bottomBarText="I'am ready >"
      navigatorFunction={bottomNavigatorFunction}
      bottomBarIncluded>
      <View style={styles.greetingsScreenWrapper}>
        <Text style={styles.title}>
          {i18n.t('signUpFlow.teacherFlow.firstScreen.welcome')}
        </Text>
        <Text style={styles.subTitle}>
          {i18n.t('signUpFlow.teacherFlow.firstScreen.pageContent')}
        </Text>
        <View style={styles.logoWrapper}>
          <TeacherLogo />
        </View>
      </View>
    </Wrapper>
  );
};

export default GreetingsScreen;
