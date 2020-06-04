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
  multiBottomBarContent: boolean;
  navigatorFunction?: () => void;
  bottomBarContent?: {leftButton: string; rightButton: string};
  onLeftButtonFunction?: () => void;
  onRightButtonFunction?: () => void;
  transparentFooter?: boolean;
}

const SignUpTeacherWalker: React.FC<Props> = props => {
  const {
    children,
    bottomBarIncluded,
    navigatorFunction,
    bottomBarText,
    multiBottomBarContent,
    bottomBarContent = {rightButton: 'none', leftButton: 'none'},
    onLeftButtonFunction,
    onRightButtonFunction,
    transparentFooter,
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
        </ScrollView>
        {bottomBarIncluded && (
          <View
            style={[
              styles.bottomNavigationWrapper,
              transparentFooter && styles.transparentFooter,
            ]}>
            <TouchableWithoutFeedback onPress={navigatorFunction}>
              <View
                style={{
                  ...styles.bottomNavigationTextWrapper,
                  justifyContent: multiBottomBarContent
                    ? 'space-between'
                    : 'center',
                }}>
                {multiBottomBarContent ? (
                  <React.Fragment>
                    <TouchableWithoutFeedback onPress={onLeftButtonFunction}>
                      <Text style={styles.bottomNavigationText}>
                        {bottomBarContent.leftButton}
                      </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onRightButtonFunction}>
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
      </View>
    </ImageBackground>
  );
};

export default SignUpTeacherWalker;
