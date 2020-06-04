import {StyleSheet} from 'react-native';
import {loginColors} from '../Login/constants';

export const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: '6%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: loginColors.white,
    fontWeight: '700',
    fontSize: 24,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: '15%',
  },
  innerWrapper: {
    paddingTop: '20%',
  },
  iconText: {
    color: 'white',
    marginTop: '16%',
  },
});
