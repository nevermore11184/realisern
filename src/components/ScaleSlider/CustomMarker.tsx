import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export class CustomMarker extends Component {
  render() {
    return <View style={styles.marker} />;
  }
}

const styles = StyleSheet.create({
  marker: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: '#DC008E',
  },
});
