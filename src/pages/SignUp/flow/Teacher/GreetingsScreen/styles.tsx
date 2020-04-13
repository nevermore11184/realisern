import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    color: loginColors.white,
    fontWeight: 'bold',
    marginTop: '15%',
  },
  subTitle: {
    fontSize: 20,
    color: loginColors.white,
    fontWeight: '600',
    lineHeight: 35,
    position: 'absolute',
    top: '26%',
    left: '20%',
    width: '70%',
    zIndex: 1,
  },
  greetingsScreenWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    paddingLeft: '16%',
  },
  logoWrapper: {
    alignSelf: 'flex-end',
    paddingTop: '35%',
  },
});
