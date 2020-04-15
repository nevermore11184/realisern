import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';

interface Props {
  progress: number;
}

const ProgressBar: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.progressBar,
          width: `${props.progress}%`,
        }}
      />
    </View>
  );
};

export default ProgressBar;
