import React, {ReactNode} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import assets from '../../../assets/images';
import {styles} from './styles';
import LogoIcon from '../../../assets/icons/LogoIcon';

interface Props {
  children: ReactNode;
  bottomBarIncluded: boolean;
  bottomBarText?: string;
  multi?: {value: boolean; buttons: {left: string; right: string}};
  navigatorFunction?: () => void;
}

const Wrapper: React.FC<Props> = props => {
  const {
    children,
    bottomBarIncluded,
    navigatorFunction,
    bottomBarText,
    multi = {value: false, buttons: {left: '< back', right: 'next >'}},
  } = props;
  const bottomBarContent = multi ? (
    <React.Fragment>
      <Text style={styles.bottomNavigationText}>{multi.buttons.left}</Text>
      <Text style={styles.bottomNavigationText}>{multi.buttons.right}</Text>
    </React.Fragment>
  ) : (
    <Text style={styles.bottomNavigationText}>{bottomBarText}</Text>
  );
  return (
    <ImageBackground style={styles.wrapper} source={assets.background}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.container}>
          <View style={styles.logoWrapper}>
            <LogoIcon width={130} height={60} />
          </View>
          {children}
          {bottomBarIncluded && (
            <View style={styles.bottomNavigation}>
              <TouchableWithoutFeedback onPress={navigatorFunction}>
                <View
                  style={{
                    ...styles.bottomNavigationTextWrapper,
                    justifyContent: multi.value ? 'space-between' : 'center',
                  }}>
                  {bottomBarContent}
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

Wrapper.defaultProps = {
  multi: {value: false, buttons: {left: '< back', right: 'next >'}},
};

export default Wrapper;
