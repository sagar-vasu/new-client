import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <Navigation />
    </Provider>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
