import React, { useState } from 'react';
import { Animated, TextInput, View } from 'react-native';
import toUpperFirst from 'lodash/upperFirst';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { LoginColors, loginExpression } from '../../pages/Login/constants';
import { validateEmail } from '../../pages/Login/utils';

interface FloatingTextInput {
  value: string;
  validationIconIncluded?: boolean;
  title: string;
  inputStyles: any;
  onChangeText: (arg: string) => void;
  attrName: string;
  keyboardType?: () => void;
  otherTextInputProps?: any;
  animatedLabelStyles: (arg: boolean) => any;
  dynamicInputStyles: (arg: boolean) => any;
  secureTextEntry?: boolean;
}

const FloatingTextInputField = (props: FloatingTextInput) => {
  Icon.loadFont();
  const {
    value,
    validationIconIncluded,
    title,
    inputStyles,
    onChangeText,
    keyboardType,
    otherTextInputProps,
    animatedLabelStyles,
    dynamicInputStyles,
    secureTextEntry,
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


  const returnAnimatedTitleStyles = (): any => ({ // returns styles
    top: position.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 0],
    }),
    ...animatedLabelStyles(isFieldActive),
  });

  const displayValidationIcon = isFieldActive && validationIconIncluded;
  const { checkIcon, closeCircle } = LoginColors;
  return (
    <View style={styles.container}>
      <Animated.Text
        onPress={handleFocus}
        style={[styles.titleStyles, returnAnimatedTitleStyles()]}
      >
        {isFieldActive ? toUpperFirst(title) : title}
      </Animated.Text>
      {displayValidationIcon && (
        <Icon
          size={15}
          style={{
            ...styles.validationIcon,
            color: validateEmail(value, loginExpression) ? checkIcon : closeCircle,
          }}
          name={validateEmail(value, loginExpression) ? 'checkcircle' : 'closecircle'}
        />
      )}
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        style={{ ...inputStyles, ...dynamicInputStyles(isFieldActive) }}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...otherTextInputProps}
      />
    </View>
  );
};

export default FloatingTextInputField;
