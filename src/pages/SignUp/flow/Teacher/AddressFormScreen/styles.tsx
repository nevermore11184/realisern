import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  addressFormContainer: {
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  formWrapper: {},
  addressWrapper: {
    paddingTop: '4%',
  },
  extraInputsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 23,
    color: loginColors.white,
    fontWeight: 'bold',
    marginTop: '10%',
    alignSelf: 'flex-start',
  },
  radioButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
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
  postCodeInputWrapper: {
    width: '60%',
  },
  addressInputWrapper: {
    width: '100%',
    marginBottom: '6%',
  },
  postCodeText: {
    color: loginColors.white,
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: '6%',
    marginTop: '6%',
  },
  selectAuxiliaryText: {
    color: loginColors.white,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  postCodeWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  selectWrapper: {
    marginBottom: '6%',
    position: 'relative',
  },
  selectInputIOS: {
    backgroundColor: loginColors.basicTransparentWhite,
    height: 50,
    borderRadius: 3,
    paddingLeft: '4%',
  },
  selectInputAndroid: {
    backgroundColor: loginColors.basicTransparentWhite,
    height: 50,
    borderRadius: 6,
  },
  additionalInputWrapper: {
    width: '45%',
  },
});
