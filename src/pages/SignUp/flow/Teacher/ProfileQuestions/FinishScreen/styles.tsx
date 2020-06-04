import {StyleSheet} from 'react-native';
import {loginColors} from '../../../../../Login/constants';

export const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: '8%',
    paddingRight: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subWrapper: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  title: {
    color: loginColors.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  thanksText: {
    marginTop: 25,
    color: loginColors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  opportunitiesIOS: {
    marginTop: '3%',
  },
  opportunitiesAndroid: {
    marginTop: '3%',
    paddingLeft: '3%',
  },
  opportunityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  opportunityText: {
    color: loginColors.white,
    lineHeight: 20,
    marginLeft: 16,
  },
  opportunitySearchText: {
    color: loginColors.white,
    lineHeight: 20,
    marginLeft: 12,
  },
});
