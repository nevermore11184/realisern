import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const loginColors = {
  basicTransparentWhite: 'rgba(255, 255, 255, 0.440982)',
  white: '#fff',
  turquoise: '#05CCF3',
  blue: '#2C91F1',
  shiftedLabel: '#4CA0EF',
  red: 'red',
  green: 'green',
  closeCircle: '#EE6575',
  checkIcon: '#83DE95',
  facebookButton: '#507CC0',
  twitterButton: '#64CCF1',
  googleButton: '#DF4930',
};

const styles = StyleSheet.create({
  notMember: {
    color: 'white',
    marginRight: '1%',
  },
  notMemberWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
  },
  linkText: {
    color: loginColors.turquoise,
  },
});

export const loginConstants = {
  forgotPassword: 'Forgotten password?',
  rememberMe: 'Remember me?',
  or: 'OR',
  notMember: (func: () => void) => (
    <View style={styles.notMemberWrapper}>
      <Text style={styles.notMember}>{'Not a member? Sign up'}</Text>
      <Text style={styles.linkText} onPress={func}>
        {'here'}
      </Text>
    </View>
  ),
};

// eslint-disable-next-line
export const loginExpression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
