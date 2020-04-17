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
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavigationTextWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '16%',
    paddingRight: '16%',
  },
  bottomNavigationText: {
    fontSize: 25,
    color: loginColors.white,
  },
  logoWrapper: {
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
  },
  scrollViewWrapper: {
    height: '100%',
    flex: 1,
  },
});
