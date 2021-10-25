import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

import Home from './src/screens/Home';

dayjs.extend(calendar);

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
      <StatusBar />
    </SafeAreaProvider>
  );
}
