import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  addressFormContainer: {
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  formWrapper: {},
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
  inputWrapperStyles: {
    width: '60%',
  },
  postCodeText: {
    color: loginColors.white,
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: '6%',
    marginTop: '6%',
  },
  postCodeWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  selectWrapper: {
    marginBottom: '10%',
    position: 'relative',
  },
});
