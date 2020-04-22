import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {styles} from './styles';

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const RadioButton = (props: Props) => {
  const {label, isActive, onClick} = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.radioContainer}>
        <View style={styles.radioWrapper}>
          {isActive && <View style={styles.internalBlock} />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;
