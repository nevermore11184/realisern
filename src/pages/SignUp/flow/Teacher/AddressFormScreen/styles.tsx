import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  addressFormContainer: {
    paddingTop: '4%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  formWrapper: {},
  addressWrapper: {
    paddingTop: '4%',
    paddingBottom: '8%',
  },
  extraInputsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 20,
    color: loginColors.white,
    fontWeight: 'bold',
    marginTop: '10%',
    alignSelf: 'flex-start',
  },
  radioButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '6%',
  },
  input: {
    backgroundColor: loginColors.basicTransparentWhite,
    borderRadius: 3,
    height: 45,
    padding: 8,
    paddingLeft: 16,
    paddingTop: 24,
    width: '100%',
  },
  postCodeInputWrapper: {
    width: '60%',
  },
  addressInputWrapper: {
    width: '100%',
    marginBottom: '2%',
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
    fontSize: 17,
    alignSelf: 'flex-start',
  },
  postCodeWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: '3%',
  },
  selectWrapper: {
    marginBottom: '6%',
    position: 'relative',
  },
  selectInputIOS: {
    backgroundColor: loginColors.basicTransparentWhite,
    height: 40,
    borderRadius: 3,
    paddingLeft: '4%',
  },
  selectInputAndroid: {
    backgroundColor: loginColors.basicTransparentWhite,
    height: 40,
    borderRadius: 6,
  },
  additionalInputWrapper: {
    width: '47%',
  },
  labelStyles: {
    fontSize: 16,
  },
  inputContainerHeight: {
    height: 30,
  },
});
