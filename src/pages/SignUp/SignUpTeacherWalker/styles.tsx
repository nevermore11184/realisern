import {StyleSheet, Platform} from 'react-native';
import {loginColors} from '../../Login/constants';

const topSpacing = Platform.OS === 'ios' ? '20%' : '10%';

export const styles = StyleSheet.create({
  backgroundWrapper: {
    height: '100%',
  },
  innerWrapper: {
    flex: 1,
    height: '100%',
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3%',
  },
  bottomNavigationTextWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '16%',
    paddingRight: '16%',
  },
  bottomNavigationText: {
    fontSize: 25,
    color: loginColors.white,
  },
  logoWrapper: {
    alignItems: 'center',
    width: '100%',
    marginTop: topSpacing,
    marginBottom: '5%',
  },
  childrenWrapper: {
    flexGrow: 1,
  },
  bottomNavigationWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    height: 75,
    paddingTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
  },
  transparentFooter: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    flexDirection: 'row',
    height: 75,
    paddingTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: loginColors.white,
  },
});
