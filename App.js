
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

import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';

export default function App() {
  const [schermata, setSchermata] = useState('HOME');

  const mazzoDelle50Sfortune = [
    { id: 1, nome: "Prendere una traversa da centrocampo", sfortuna: 35 },
    { id: 2, nome: "Fare autogol di testa nel derby", sfortuna: 75 },
    { id: 3, nome: "Subire un gol decisivo al minuto 93", sfortuna: 90 },
    { id: 4, nome: "Sbagliare il rigore decisivo in finale", sfortuna: 99 },
    { id: 5, nome: "Perdere una finale di Champions League al 93'", sfortuna: 95 },
    { id: 6, nome: "Subire un gol decisivo a 30 secondi dalla fine", sfortuna: 88 },
    { id: 7, nome: "Il tuo portiere fa una papera clamorosa sotto le gambe", sfortuna: 80 },
    { id: 8, nome: "Perdere lo scudetto all'ultima giornata per differenza reti", sfortuna: 92 },
    { id: 9, nome: "Colpire tre pali nella stessa azione d'attacco", sfortuna: 60 },
    { id: 10, nome: "L'arbitro assegna un rigore inesistente contro al 95'", sfortuna: 85 },
    { id: 11, nome: "L'attaccante della tua squadra manca la palla a porta vuota", sfortuna: 65 },
    { id: 12, nome: "Il giocatore più forte si infortuna prima della partita dell'anno", sfortuna: 87 },
    { id: 13, nome: "Venire eliminati a causa di un autogol di schiena", sfortuna: 70 },
    { id: 14, nome: "Il portiere avversario sale nei secondi finali e segna di testa", sfortuna: 82 },
    { id: 15, nome: "Sbagliare un rigore perché si scivola al momento del tiro", sfortuna: 68 },
    { id: 16, nome: "Farsi espellere dopo soli due minuti dall'ingresso in campo", sfortuna: 55 },
    { id: 17, nome: "Subire una rimonta da 3-0 a 3-4 nel secondo tempo", sfortuna: 89 },
    { id: 18, nome: "Il pallone rimbalza su una pozzanghera e manda in porta l'avversario", sfortuna: 58 },
    { id: 19, nome: "Gol annullato dal VAR al novantesimo per un fuorigioco di un millimetro", sfortuna: 78 },
    { id: 20, nome: "Sbagliare un gol già fatto perché la palla rimbalza male all'ultimo", sfortuna: 50 },
    { id: 21, nome: "Retrocedere in Serie B per colpa di un punto di penalizzazione", sfortuna: 91 },
    { id: 22, nome: "Il tuo portiere si scontra con il difensore e la palla entra in porta", sfortuna: 62 },
    { id: 23, nome: "Giocare tutta la partita in dieci per un cartellino rosso ingiusto", sfortuna: 73 },
    { id: 24, nome: "Tirare una punizione perfetta che batte sulla traversa ed esce", sfortuna: 45 },
    { id: 25, nome: "Subire gol sul rinvio del tuo portiere che sbatte sull'attaccante", sfortuna: 64 }
  ];

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
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 50,
  },
  schermataCentrata: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
  },
  titoloHome: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: 10, 
    textAlign: 'center',
  },
  sottotitoloHome: { 
    fontSize: 16, 
    color: 'gray', 
    marginBottom: 40, 
    textAlign: 'center',
  },
});
  
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
