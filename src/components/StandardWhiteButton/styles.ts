import {StyleSheet} from 'react-native';
import {loginColors} from '../../pages/Login/constants';

export const styles = StyleSheet.create({
  loginButtonStyle: {
    backgroundColor: loginColors.white,
    width: '100%',
  },
  loginTitleStyle: {
    color: loginColors.blue,
  },
  standardButtonWrapper: {
    width: '100%',
    marginTop: '8%',
    height: 48,
  },
});
