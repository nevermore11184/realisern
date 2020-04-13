import {StyleSheet} from 'react-native';
import {loginColors} from '../../Login/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
    height: '30%',
    width: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  scrollViewWrapper: {
    height: '100%',
  },
});
