import {StyleSheet} from 'react-native';
import {loginColors} from './constants';

export const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: loginColors.basicTransparentWhite,
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
  customCheckBox: {
    margin: 0,
    marginLeft: 1,
    padding: 0,
    marginTop: 1,
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
    borderBottomColor: loginColors.white,
    borderBottomWidth: 1,
    width: '40%',
  },
  dividerContent: {
    color: loginColors.white,
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
  fontWeightBold: {
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: loginColors.white,
  },
  iconWrapper: {
    backgroundColor: loginColors.basicTransparentWhite,
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
    backgroundColor: loginColors.white,
    marginTop: 40,
    width: 330,
  },
  loginTitleStyle: {
    color: loginColors.blue,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: loginColors.basicTransparentWhite,
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
    color: loginColors.white,
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
});
