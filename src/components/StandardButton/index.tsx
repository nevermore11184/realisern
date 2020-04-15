import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface Props {
  onPress: () => void | string;
  title: string;
  disabled?: boolean;
  additionalStyles?: object;
  additionalWrapperStyles?: object;
}

const StandardButton = (props: Props) => {
  const {onPress, title, additionalStyles, additionalWrapperStyles} = props;
  return (
    <View style={{...styles.standardButtonWrapper, ...additionalWrapperStyles}}>
      <Button
        titleStyle={styles.loginTitle}
        buttonStyle={{...styles.loginButton, ...additionalStyles}}
        onPress={onPress}
        title={title}
      />
    </View>
  );
};

export default StandardButton;
