import React from 'react';
import {StyleSheet, View} from 'react-native';

const Item: React.FC = () => {
  return <View style={styles.snap} />;
};

const styles = StyleSheet.create({
  snap: {
    width: 13,
    height: 13,
    backgroundColor: '#D8D8D8',
    borderRadius: 50,
  },
});

export default Item;
