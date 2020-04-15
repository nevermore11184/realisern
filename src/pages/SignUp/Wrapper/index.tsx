import React, {ReactNode} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import assets from '../../../assets/images';
import {styles} from './styles';
import LogoIcon from '../../../assets/icons/LogoIcon';

interface Props {
  children: ReactNode;
  bottomBarIncluded: boolean;
  navigatorFunction?: () => void;
}

const Wrapper: React.FC<Props> = props => {
  const {children, bottomBarIncluded, navigatorFunction} = props;
  return (
    <ImageBackground style={styles.wrapper} source={assets.background}>
      <SafeAreaView style={styles.scrollViewWrapper}>
        <ScrollView style={styles.container}>
          <View style={styles.logoWrapper}>
            <LogoIcon width={130} height={60} />
          </View>
          {children}
          {bottomBarIncluded && (
            <View style={styles.bottomNavigation}>
              <TouchableWithoutFeedback onPress={navigatorFunction}>
                <View style={styles.bottomNavigationTextWrapper}>
                  <Text style={styles.bottomNavigationText}>I'm ready ></Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;
