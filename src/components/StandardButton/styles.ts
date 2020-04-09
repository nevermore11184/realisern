import {StyleSheet} from 'react-native';
import {loginColors} from '../../pages/Login/constants';

export const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: loginColors.white,
    width: '100%',
    height: 48,
  },
  loginTitle: {
    color: loginColors.blue,
  },
  standardButtonWrapper: {
    width: '100%',
    marginTop: '8%',
  },
});
