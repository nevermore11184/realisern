import { StyleSheet } from 'react-native';
import { LoginColors } from '../../constants';

export const styles = StyleSheet.create({
  buttonContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
  },
  facebookButton: {
    backgroundColor: LoginColors.facebookButton,
    borderRadius: 4,
    padding: 10,
  },
  facebookIcon: {
    alignSelf: 'flex-start',
  },
  facebookTitle: {
    alignSelf: 'center',
    color: LoginColors.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    marginRight: 65,
  },
});
