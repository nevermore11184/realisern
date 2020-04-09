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
  notMember: {
    color: 'white',
    marginRight: '1%',
  },
  notMemberWrapper: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  linkText: {
    color: loginColors.turquoise,
  },
  extraCTA: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
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
    marginTop: 36,
    width: '80%',
  },
  rowWrapper: {
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
  forgottenPasswordWrapper: {
    width: '80%',
    paddingLeft: '5%',
  },
});
