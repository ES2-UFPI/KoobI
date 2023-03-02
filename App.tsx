import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Nunito_400Regular } from '@expo-google-fonts/nunito'

import AppRoutes from './src/routers/app.routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Inter_700Bold,
    Inter_400Regular
  })

  if(!fontsLoaded){
    return null;
  }
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

    paddingTop: 45,
  },
});
