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
  multi: boolean;
  navigatorFunction?: () => void;
  bottomBarContent?: {leftButton: string; rightButton: string};
  leftButtonFunction?: () => void;
  rightButtonFunction?: () => void;
}

const Wrapper: React.FC<Props> = props => {
  const {
    children,
    bottomBarIncluded,
    navigatorFunction,
    bottomBarText,
    multi,
    bottomBarContent = {rightButton: 'none', leftButton: 'none'},
    leftButtonFunction,
    rightButtonFunction,
  } = props;
  return (
    <ImageBackground
      style={styles.backgroundWrapper}
      source={assets.background}>
      <View style={styles.innerWrapper}>
        <ScrollView>
          <View style={styles.logoWrapper}>
            <LogoIcon width={130} height={60} />
          </View>
          <View style={styles.childrenWrapper}>{children}</View>
          {bottomBarIncluded && (
            <View style={styles.bottomNavigationWrapper}>
              <TouchableWithoutFeedback onPress={navigatorFunction}>
                <View
                  style={{
                    ...styles.bottomNavigationTextWrapper,
                    justifyContent: multi ? 'space-between' : 'center',
                  }}>
                  {multi ? (
                    <React.Fragment>
                      <TouchableWithoutFeedback onPress={leftButtonFunction}>
                        <Text style={styles.bottomNavigationText}>
                          {bottomBarContent.leftButton}
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={rightButtonFunction}>
                        <Text style={styles.bottomNavigationText}>
                          {bottomBarContent.rightButton}
                        </Text>
                      </TouchableWithoutFeedback>
                    </React.Fragment>
                  ) : (
                    <Text style={styles.bottomNavigationText}>
                      {bottomBarText}
                    </Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Wrapper;
