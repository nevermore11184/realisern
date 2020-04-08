import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface Props {
  onPress: () => void | string;
  title: string;
  disabled?: boolean;
  additionalStyles?: object;
}

const StandardButton = (props: Props) => {
  const {onPress, title, additionalStyles} = props;
  return (
    <View style={styles.standardButtonWrapper}>
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
