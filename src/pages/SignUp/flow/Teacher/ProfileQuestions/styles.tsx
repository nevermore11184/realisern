import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../Login/constants';

export const styles = StyleSheet.create({
  majorWrapper: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: '20%',
  },
  sliderWrapper: {
    marginTop: '6%',
    width: '100%',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarWrapper: {
    width: '100%',
  },
  sliderTitleWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderTitle: {
    color: loginColors.white,
    fontSize: 25,
    fontWeight: '600',
  },
  contentWrapper: {
    width: '100%',
    marginTop: '7%',
    marginBottom: '14%',
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
