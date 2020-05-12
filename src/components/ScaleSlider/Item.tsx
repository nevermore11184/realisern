import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  value: number;
  first: number;
  second: number;
}

export class Item extends Component<Props> {
  render() {
    return <View style={styles.snap} />;
  }
}

const styles = StyleSheet.create({
  snap: {
    width: 13,
    height: 13,
    backgroundColor: '#D8D8D8',
    borderRadius: 50,
  },
});
