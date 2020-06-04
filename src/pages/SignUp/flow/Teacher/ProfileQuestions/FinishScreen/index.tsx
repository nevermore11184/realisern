import React from 'react';
import {View, Text, Platform} from 'react-native';
import OvalIcon from '../../../../../../assets/icons/OvalIcon';
import SignUpTeacherWalker from '../../../../SignUpTeacherWalker';
import i18n from '../../../../../../config/locales/customisation';
import ProgressBar from '../../components/ProgressBar';
import {styles} from './styles';
import {opportunitiesArray} from './constants';
import SearchIcon from '../../../../../../assets/icons/SignUpTeacherFlow_Finish/SearchIcon';
import UnlockIcon from '../../../../../../assets/icons/SignUpTeacherFlow_Finish/UnlockIcon';
import ReadIcon from '../../../../../../assets/icons/SignUpTeacherFlow_Finish/ReadIcon';
import JoinIcon from '../../../../../../assets/icons/SignUpTeacherFlow_Finish/JoinIcon';

interface Icons {
  [p: string]: null | JSX.Element;
}

const icons: Icons = {
  search: <SearchIcon />,
  unlock: <UnlockIcon />,
  read: <ReadIcon />,
  join: <JoinIcon />,
} as {[key: string]: null | JSX.Element};

const FinishScreen = () => {
  return (
    <SignUpTeacherWalker
      bottomBarIncluded
      multiBottomBarContent={false}
      bottomBarText="start exploring >">
      <View style={styles.wrapper}>
        <ProgressBar progress={100} />
        <View style={styles.subWrapper}>
          <Text style={styles.title}>
            {i18n.t('signUpFlow.teacherFlow.finishScreen.title')}
          </Text>
          <OvalIcon />
          <Text style={styles.thanksText}>
            {i18n.t('signUpFlow.teacherFlow.finishScreen.thanks')}
          </Text>
          <View
            style={[
              Platform.OS === 'android'
                ? styles.opportunitiesAndroid
                : styles.opportunitiesIOS,
            ]}>
            {opportunitiesArray.map(opportunity => {
              return (
                <View style={styles.opportunityWrapper}>
                  {icons[opportunity]}
                  <Text
                    style={[
                      opportunity === 'search'
                        ? styles.opportunitySearchText
                        : styles.opportunityText,
                    ]}>
                    {i18n.t(
                      `signUpFlow.teacherFlow.finishScreen.${opportunity}`,
                    )}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </SignUpTeacherWalker>
  );
};

export default FinishScreen;
