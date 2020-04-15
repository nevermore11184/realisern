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
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  bottomNavigationTextWrapper: {
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
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
