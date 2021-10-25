import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';

// import Layout from '../constants/Layout';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  name: string;
  tableName: string;
  createdOn: string;
  completedOn: string | null;
};

const OrderRow = ({ name, tableName, createdOn, completedOn }: Props) => {
  const isActive = !completedOn;

  const formatDate = (createdOn: string) => {
    return dayjs(createdOn).calendar();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.wrapper}>
          {isActive ? (
            <Text style={styles.tableName}>{tableName}</Text>
          ) : (
            <View>
              <Ionicons name="receipt" size={32} color="#DC5F5E" />
            </View>
          )}
        </View>
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            {isActive ? (
              <Text style={styles.activeText}>En progreso</Text>
            ) : (
              <Text style={styles.time}>{formatDate(createdOn)}</Text>
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 16
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(220, 95, 94, 0.2)',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    width: 64
  },
  tableName: {
    color: '#DC5F5E',
    fontWeight: 'bold',
    fontSize: 12
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 8
  },
  name: {
    fontSize: 18,
    marginBottom: 8
  },
  activeText: {
    color: '#34C759',
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.6,
    textTransform: 'uppercase'
  },
  time: {
    fontSize: 16,
    opacity: 0.4
  }
});

export default OrderRow;
