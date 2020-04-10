import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  ImageBackground,
  Text,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import assets from '../../assets/images';
import {styles} from './styles';
import LogoIcon from '../../assets/icons/LogoIcon';
import i18n from '../../config/locales/customisation';
import TeacherIcon from '../../assets/icons/TeacherIcon';
import SchoolerIcon from '../../assets/icons/SchoolerIcon';

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
    <ImageBackground style={styles.wrapper} source={assets.background}>
      <View
        style={{
          ...styles.container,
          paddingTop: Platform.OS === 'ios' ? '30%' : '10%',
        }}>
        <LogoIcon width={130} height={60} />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>
            {i18n.t('signUpFlow.homePage.title')}
          </Text>
          <View style={styles.iconsWrapper}>
            <TouchableWithoutFeedback
              onPress={onNavigateToFlow('SignUpTeacher')}>
              <View style={styles.iconWrapper}>
                <TeacherIcon />
                <Text style={styles.iconText}>
                  {i18n.t('signUpFlow.homePage.iconsTitle.teacher')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={onNavigateToFlow('SignUpSchooler')}>
              <View style={styles.iconWrapper}>
                <SchoolerIcon />
                <Text style={styles.iconText}>
                  {i18n.t('signUpFlow.homePage.iconsTitle.school')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
