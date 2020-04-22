import {StyleSheet} from 'react-native';
import {loginColors} from '../../pages/Login/constants';

export const styles = StyleSheet.create({
  radioWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.44)',
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '11%',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    color: loginColors.white,
    fontSize: 20,
    marginTop: 1,
  },
  internalBlock: {
    width: 25,
    height: 25,
    backgroundColor: loginColors.white,
    borderRadius: 50,
  },
});
