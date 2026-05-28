
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';

export default function App() {
  const [schermata, setSchermata] = useState('HOME');
  return (
    <View style={styles.container}></View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 50 }
});
