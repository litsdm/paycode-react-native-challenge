/**
 * API URL: /api/order/all?restaurantID=600c6ede63226ae92efe9bff
 * query: {
 *    restaurantID: string;
 *    first: number;
 *    offset: number;
 * }
 * 
 * 
 * Challenge: Debes de hacer una llamada al endpoint proporcionado, cargar las ordenes y renderizarlas
 * en una lista utilizando el componente OrderRow.
 * Extra: Manejar pagination usando first y offset en el API.
 * Extra: Hacer que el componente de Header se mueva junto con la lista.
 */


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