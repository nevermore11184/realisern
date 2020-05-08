import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class Item extends Component {
  render() {
    return (
      <View style={styles.snap} />
    );
  }
}

const styles = StyleSheet.create({
  active: {
    textAlign: 'center',
    fontSize: 20,
    bottom: 10,
    color: '#5e5e5e',
  },
  snap: {
    width: 13,
    height: 13,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  inactive: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#bdc3c7',
  },
  line: {
    fontSize: 10,
    textAlign: 'center',
  },
});
