import {StyleSheet, Dimensions} from 'react-native';
import {loginColors} from '../../../../Login/constants';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  infoScreenContainer: {
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: height - 250,
  },
  title: {
    color: loginColors.white,
    fontSize: 23,
    fontWeight: '600',
    lineHeight: 34,
  },
  titleWrapper: {
    paddingTop: '15%',
    height: '100%',
  },
});
