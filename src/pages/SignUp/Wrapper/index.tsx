import React, {ReactNode} from 'react';
import {View, ImageBackground, Platform, Text, ScrollView} from 'react-native';
import assets from '../../../assets/images';
import {styles} from './styles';
import LogoIcon from '../../../assets/icons/LogoIcon';

interface Props {
  children: ReactNode;
  bottomBarIncluded: boolean;
}

const Wrapper: React.FC<Props> = ({children, bottomBarIncluded}) => {
  return (
    <ImageBackground style={styles.wrapper} source={assets.background}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          style={{
            ...styles.container,
            paddingTop: Platform.OS === 'ios' ? '18%' : '10%',
          }}>
          <View style={styles.logoWrapper}>
            <LogoIcon width={130} height={60} />
          </View>
          {children}
          {bottomBarIncluded && (
            <View style={styles.bottomNavigation}>
              <Text>I am ready ></Text>
            </View>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Wrapper;
