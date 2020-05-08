import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import images from '../../assets/images';

export class CustomMarker extends Component {
  render() {
    return (
      <View style={styles.image}/>
    );
  }
}

const styles = StyleSheet.create({
  circle1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
  },
  circle2: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4eaa37',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: '#DC008E',
  },
});
