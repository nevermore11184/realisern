import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  children: ReactNode;
  agree: boolean;
}

const ConfirmationButton: React.FC<Props> = ({children, agree}) => {
  return (
    <View style={agree ? styles.agreeButton : styles.disagreeButton}>
      <Text style={agree ? styles.agreeButtonText : styles.disagreeButtonText}>{children}</Text>
    </View>
  );
};

export default ConfirmationButton;
