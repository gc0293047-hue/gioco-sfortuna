
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


import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';

export default function App() {
  const [schermata, setSchermata] = useState('HOME');
  return (
    <View style={styles.container}>
      {schermata === 'HOME' && (
        <View style={styles.schermataCentrata}>
          <Text style={styles.titoloHome}>GIOCO SFORTUNA ⚽</Text>
          <Text style={styles.sottotitoloHome}>Riuscirai a inserire la quarta sfiga al posto giusto?</Text>
          <Button title="INIZIA A GIOCARE" color="black" onPress={() => setSchermata('GIOCO')} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 50 },
  schermataCentrata: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  titoloHome: { fontSize: 32, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center' },
  sottotitoloHome: { fontSize: 16, color: 'gray', marginBottom: 40, textAlign: 'center' }
});

  
});
