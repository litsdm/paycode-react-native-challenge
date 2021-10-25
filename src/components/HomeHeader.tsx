import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Ordenes</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default Header;
