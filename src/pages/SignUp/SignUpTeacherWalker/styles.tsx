import {StyleSheet} from 'react-native';
import {loginColors} from '../../Login/constants';

export const styles = StyleSheet.create({
  backgroundWrapper: {
    height: '100%',
  },
  innerWrapper: {
    height: '100%',
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3%',
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
    marginTop: '20%',
    marginBottom: '5%',
  },
  childrenWrapper: {
    flexGrow: 1,
  },
  bottomNavigationWrapper: {
    flexGrow: 1,
    height: 90,
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
