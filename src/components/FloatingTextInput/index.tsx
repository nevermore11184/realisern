import React, {useState} from 'react';
import {
  Animated,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Text,
  ViewStyle,
} from 'react-native';
import toUpperFirst from 'lodash/upperFirst';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {loginColors, loginExpression} from '../../pages/Login/constants';
import {validateEmail} from '../../pages/Login/utils';
import {animatedLabelStyles, dynamicInputStyles} from './utils';

interface FloatingTextInput {
  value: string;
  validationIconIncluded?: boolean;
  title: string;
  inputStyles: object;
  onChangeText: (arg: string) => void;
  name: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
  wrapperStyles?: ViewStyle;
  label?: string;
  otherTextInputProps?: object;
  labelSize?: {fontSize: number};
  inputContainerHeight?: {height: number};
  untouchedTitleSpacing?: number;
}

const FloatingTextInputField = (props: FloatingTextInput) => {
  Icon.loadFont();
  const {
    value,
    validationIconIncluded,
    title,
    inputStyles,
    onChangeText,
    otherTextInputProps,
    secureTextEntry,
    label,
    wrapperStyles,
    labelSize,
    inputContainerHeight,
    untouchedTitleSpacing,
  } = props;
  const [position] = useState(new Animated.Value(value ? 1 : 0));
  const [isFieldActive, setFieldActive] = useState(false);
  // const [isEmailValid, setEmailValid] = useState(false);

  const handleFocus = (): void => {
    if (!isFieldActive) {
      setFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  };

  const handleBlur = (): void => {
    if (isFieldActive && !value) {
      setFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  };

  const returnAnimatedTitleStyles = () => ({
    // returns styles
    top: position.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 0],
    }),
    ...animatedLabelStyles(isFieldActive, untouchedTitleSpacing),
  });

  const displayValidationIcon = isFieldActive && validationIconIncluded;

  const {checkIcon, closeCircle} = loginColors;

  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      {label && <Text style={[styles.label, labelSize]}>{label}</Text>}
      <TouchableWithoutFeedback onPress={handleFocus}>
        <View style={[styles.container, inputContainerHeight]}>
          <Animated.Text
            onPress={handleFocus}
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {...styles.titleStyles, zIndex: isFieldActive ? 1 : 0},
              returnAnimatedTitleStyles(),
            ]}>
            {isFieldActive ? toUpperFirst(title) : title}
          </Animated.Text>
          {displayValidationIcon && (
            <Icon
              size={15}
              style={{
                ...styles.validationIcon,
                color: validateEmail(value, loginExpression)
                  ? checkIcon
                  : closeCircle,
              }}
              name={
                validateEmail(value, loginExpression)
                  ? 'checkcircle'
                  : 'closecircle'
              }
            />
          )}
          <TextInput
            value={value}
            secureTextEntry={secureTextEntry}
            style={[
              inputStyles,
              dynamicInputStyles && dynamicInputStyles(isFieldActive),
            ]}
            underlineColorAndroid="transparent"
            keyboardType="default"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            {...otherTextInputProps}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingTextInputField;
