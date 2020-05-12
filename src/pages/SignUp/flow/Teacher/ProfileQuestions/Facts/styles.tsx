import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../../Login/constants';

export const styles = StyleSheet.create({
  majorWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  sliderWrapper: {
    width: '100%',
  },
  progressBarWrapper: {
    width: '100%',
  },
  contentWrapper: {
    width: '100%',
    // alignItems: 'center',
    marginTop: '10%',
    marginBottom: '20%',
  },
  title: {
    fontSize: 24,
    color: loginColors.white,
    fontWeight: '600',
    marginBottom: '4%',
  },
  text: {
    fontSize: 21,
    color: loginColors.white,
  },
});
