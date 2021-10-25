import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrderRow from '../components/OrderRow';
import Header from '../components/HomeHeader';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f7',
    flex: 1
  }
});

export default Home;