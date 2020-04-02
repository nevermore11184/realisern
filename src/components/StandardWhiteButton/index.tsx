import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface StandardWhiteButtonProps {
  onPress: () => void | string;
  title: string;
}

const StandardWhiteButton = (props: StandardWhiteButtonProps) => {
  const {onPress, title} = props;
  return (
    <View style={styles.standardButtonWrapper}>
      <Button
        titleStyle={styles.loginTitleStyle}
        buttonStyle={styles.loginButtonStyle}
        onPress={onPress}
        title={title}
      />
    </View>
  );
};

export default StandardWhiteButton;
