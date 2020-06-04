import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../../Login/constants';

export const styles = StyleSheet.create({
  progressBarWrapper: {
    width: '100%',
  },
  confirmationWrapper: {
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  textWrapper: {
    marginTop: '10%',
  },
  standardText: {
    color: loginColors.white,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  linkedText: {
    color: loginColors.turquoise,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '25%',
  },
  agreeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#83DE95',
  },
  agreeButtonText: {
    color: loginColors.white,
  },
  disagreeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: 40,
    borderRadius: 4,
    backgroundColor: loginColors.white,
  },
  disagreeButtonText: {
    color: '#797878',
  },
});
