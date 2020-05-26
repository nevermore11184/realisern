import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  credentialsFormWrapper: {
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: '6%',
    marginBottom: '10%',
  },
  input: {
    backgroundColor: loginColors.basicTransparentWhite,
    borderRadius: 3,
    height: 65,
    padding: 16,
    paddingTop: 32,
    width: '100%',
  },
  formWrapper: {
    width: '100%',
    paddingTop: '10%',
  },
  inputWrapper: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  standardButton: {
    height: 65,
  },
  standardButtonWrapper: {
    width: '30%',
  },
});
