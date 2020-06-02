import React from 'react';
import {StyleSheet, View} from 'react-native';

const Marker: React.FC = () => {
  return <View style={styles.marker} />;
};

const styles = StyleSheet.create({
  marker: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: '#DC008E',
  },
});

export default Marker;
