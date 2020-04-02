import {StyleSheet} from 'react-native';
import {loginColors} from '../Login/constants';

export const styles = StyleSheet.create({
  forgottenPasswordBackground: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingTop: '30%',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '20%',
    display: 'flex',
  },
  forgottenPasswordTitle: {
    fontSize: 24,
    color: loginColors.white,
    fontWeight: '700',
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    paddingTop: '8%',
    height: '100%',
    width: '100%',
  },
  forgottenPasswordText: {
    color: loginColors.white,
    fontSize: 16,
    paddingTop: '6%',
    lineHeight: 23,
    width: '100%',
  },
  textInput: {
    backgroundColor: loginColors.basicTransparentWhite,
    borderRadius: 3,
    height: 65,
    padding: 16,
    paddingTop: 32,
    width: '100%',
  },
  inputWrapper: {
    width: '100%',
    marginTop: '7%',
  },
});
