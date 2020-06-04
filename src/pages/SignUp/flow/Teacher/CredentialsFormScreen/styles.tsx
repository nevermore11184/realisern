import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  credentialsFormWrapper: {
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: '6%',
    paddingBottom: '5%',
  },
  input: {
    backgroundColor: loginColors.basicTransparentWhite,
    borderRadius: 3,
    height: 55,
    padding: 8,
    paddingTop: 24,
    paddingLeft: 16,
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
    height: 56,
  },
  standardButtonWrapper: {
    width: '30%',
  },
  labelStyles: {
    fontSize: 19,
  },
  inputContainerHeight: {
    height: 40,
  },
});
