import React from 'react';
import {View, Text, Platform} from 'react-native';
import Wrapper from '../../../Wrapper';
import TeacherLogo from '../../../../../assets/icons/TeacherLogo';
import i18n from '../../../../../config/locales/customisation';

import {styles} from './styles';

const GreetingsScreen = () => (
  <Wrapper bottomBarIncluded>
    <View
      style={{
        ...styles.greetingsScreenWrapper,
        height: Platform.OS === 'ios' ? '85%' : '80%',
      }}>
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

export default GreetingsScreen;
