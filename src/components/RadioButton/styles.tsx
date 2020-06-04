import {StyleSheet} from 'react-native';
import {loginColors} from '../../pages/Login/constants';

export const styles = StyleSheet.create({
  radioWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.44)',
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '11%',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: loginColors.white,
    fontSize: 17,
    marginTop: 1,
  },
  internalBlock: {
    width: 20,
    height: 20,
    backgroundColor: loginColors.white,
    borderRadius: 50,
  },
});
