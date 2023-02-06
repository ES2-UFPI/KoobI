import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

import AppRoutes from './src/routers/app.routes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
