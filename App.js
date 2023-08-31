// @ts-check
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/index'
import { DisplaySettingsView } from "./components/DisplaySettingsView";
import { UpdateSettingsView } from "./components/UpdateSettingsView";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <DisplaySettingsView />
          <UpdateSettingsView />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
