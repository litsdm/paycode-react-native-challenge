import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrderRow from '../components/OrderRow';
import Header from '../components/HomeHeader';

const tempRow = {
  createdOn: '2021-04-26T16:23:48.393+00:00',
  completedOn: '2021-04-26T16:23:48.393+00:00',
  name: 'Orden #1',
  table: {
    name: 'Mesa 1'
  }
}

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <OrderRow 
      name={tempRow.name} 
      createdOn={tempRow.createdOn} 
      completedOn={tempRow.completedOn} 
      tableName={tempRow.table.name} 
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f7',
    flex: 1
  }
});

export default Home;