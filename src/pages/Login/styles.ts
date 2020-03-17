import { StyleSheet } from 'react-native';
import { LoginColors } from './constants';

export const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: LoginColors.basicTransparentWhite,
    borderRadius: 4,
    height: 15,
    marginRight: 11,
    paddingLeft: 1,
    paddingTop: 1,
    width: 15,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: 32,
    paddingTop: '10%',
    width: '100%',
  },
  divider: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 16,
    position: 'relative',
    width: '80%',
  },
  dividerBorder: {
    borderBottomColor: LoginColors.white,
    borderBottomWidth: 1,
    width: '40%',
  },
  dividerContent: {
    color: LoginColors.white,
    left: '47%',
    position: 'absolute',
    top: '70%',
  },
  extraCTA: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '80%',
  },
  iconWrapper: {
    backgroundColor: LoginColors.basicTransparentWhite,
    borderRadius: 3,
    width: 15,
  },
  loginBlock: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 36,
    width: '100%',
  },
  loginButtonStyle: {
    backgroundColor: LoginColors.white,
    marginTop: 40,
    width: 330,
  },
  loginTitleStyle: {
    color: LoginColors.blue,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: LoginColors.basicTransparentWhite,
    borderRadius: 3,
    height: 65,
    marginBottom: '4%',
    padding: 16,
    paddingTop: 32,
    width: '100%',
  },
  validationTitle: {
    position: 'absolute',
    top: 130,
    zIndex: 1000,
  },
  whiteColor: {
    color: LoginColors.white,
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
});
