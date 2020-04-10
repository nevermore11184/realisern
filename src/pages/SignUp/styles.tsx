import {StyleSheet} from 'react-native';
import {loginColors} from '../Login/constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    paddingTop: '8%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: loginColors.white,
    fontWeight: '700',
    fontSize: 24,
  },
  iconsWrapper: {
    paddingTop: '15%',
    height: '100%',
    justifyContent: 'space-around',
  },
  iconWrapper: {
    alignItems: 'center',
    height: '25%',
  },
  iconText: {
    color: 'white',
    marginTop: '16%',
  },
});
