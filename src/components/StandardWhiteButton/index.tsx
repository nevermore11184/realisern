import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface Props {
  onPress: () => void | string;
  title: string;
  disabled?: boolean;
}

const StandardWhiteButton = (props: Props) => {
  const {onPress, title} = props;
  return (
    <View style={styles.standardButtonWrapper}>
      <Button
        titleStyle={styles.loginTitle}
        buttonStyle={styles.loginButton}
        onPress={onPress}
        title={title}
      />
    </View>
  );
};

export default StandardWhiteButton;
