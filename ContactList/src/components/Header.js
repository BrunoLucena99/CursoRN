import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Header = (props) => (
  <SafeAreaView style={styles.containerStyle}>
    <Text style={styles.titleStyle}>{props.title}</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 5,
    backgroundColor: '#6ca2f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    color: '#FFF',
  }
});

export default Header;