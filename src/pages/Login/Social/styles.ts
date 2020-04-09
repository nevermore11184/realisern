import {StyleSheet} from 'react-native';
import {loginColors} from '../constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    width: '100%',
  },
  buttonContent: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  buttonIcon: {
    paddingLeft: 15,
    paddingTop: 15,
    width: '28%',
  },
  buttonInnerContent: {
    color: loginColors.white,
    fontSize: 16,
    fontWeight: '300',
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  servicesIntegrationWrapper: {
    width: '80%',
  },
});
