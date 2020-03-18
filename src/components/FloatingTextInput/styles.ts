import { StyleSheet } from 'react-native';
import { LoginColors } from '../../pages/Login/constants';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 60,
    marginBottom: 16,
    marginVertical: 4,
    width: '80%',
  },
  textInput: {
    color: 'black',
    fontSize: 15,
    marginTop: 5,
  },
  titleStyles: {
    color: LoginColors.white,
    left: 16,
    position: 'absolute',
    top: 10,
    zIndex: 1,
  },
  validationIcon: {
    left: '90%',
    position: 'absolute',
    top: 27,
    zIndex: 1,
  },
});
