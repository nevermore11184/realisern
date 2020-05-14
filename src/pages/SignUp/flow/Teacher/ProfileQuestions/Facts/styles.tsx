import {Dimensions, StyleSheet} from 'react-native';
import {loginColors} from '../../../../../Login/constants';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  majorWrapper: {
    width: '80%',
    alignSelf: 'center',
    height: height - 250,
  },
  sliderWrapper: {
    marginTop: '15%',
    width: '100%',
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
    fontSize: 30,
    fontWeight: '600',
  },
  contentWrapper: {
    width: '100%',
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
