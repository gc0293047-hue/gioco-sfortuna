
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

const [timeline, setTimeline] = useState([]);
const [daCollocare, setDaCollocare] = useState(null);
const [esito, setEsito] = useState('');
  

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
    { id: 26, nome: "Il bomber della squadra sbaglia tre rigori nella stessa partita", sfortuna: 77 },
    { id: 27, nome: "Perdere la finale della coppa nazionale ai calci di rigore ad oltranza", sfortuna: 84 },
    { id: 28, nome: "Dominare la partita con venti tiri in porta e perdere 1-0", sfortuna: 79 },
    { id: 29, nome: "Il difensore fa un retropassaggio senza vedere il portiere fuori", sfortuna: 67 },
    { id: 30, nome: "L'allenatore sbaglia i cambi e si subiscono due gol in cinque minuti", sfortuna: 52 },
    { id: 31, nome: "Farsi parare il rigore decisivo dal portiere di riserva avversario", sfortuna: 74 },
    { id: 32, nome: "Prendere gol da un ex giocatore che non segnava da tre anni", sfortuna: 57 },
    { id: 33, nome: "Il capitano fa un fallo di mano ingenuo in area al 90'", sfortuna: 72 },
    { id: 34, nome: "La palla sbatte sul palo, scorre sulla linea ma non entra", sfortuna: 48 },
    { id: 35, nome: "Perdere a tavolino per aver schierato un giocatore squalificato", sfortuna: 86 },
    { id: 36, nome: "Subire tre infortuni nei primi venti minuti finendo i cambi", sfortuna: 69 },
    { id: 37, nome: "L'arbitro fischia la fine un secondo prima che la palla entri", sfortuna: 83 },
    { id: 38, nome: "Prendere gol su una deviazione decisiva della barriera", sfortuna: 42 },
    { id: 39, nome: "Il difensore scivola sull'erba bagnata e lascia campo alla punta", sfortuna: 53 },
    { id: 40, nome: "Venire eliminati dalla coppa per la regola dei gol in trasferta", sfortuna: 76 },
    { id: 41, nome: "Il pallone si sgonfia a metà di un tiro diretto all'incrocio", sfortuna: 30 },
    { id: 42, nome: "L'attaccante esulta togliendosi la maglia ed espulso per doppio giallo", sfortuna: 61 },
    { id: 43, nome: "Subire gol perché il portiere viene accecato dai riflettori", sfortuna: 40 },
    { id: 44, nome: "Un difensone devia il pallone nella propria porta con il tacco", sfortuna: 59 },
    { id: 45, nome: "Perdere il derby per colpa di un rigore concesso all'ultimo secondo", sfortuna: 81 },
    { id: 46, nome: "La squadra avversaria segna in evidente fuorigioco ma il VAR è rotto", sfortuna: 93 },
    { id: 47, nome: "L'attaccante colpisce il palo interno, la palla sbatte sull'altro ed esce", sfortuna: 46 },
    { id: 48, nome: "Prendere gol direttamente da calcio d'angolo per il forte vento", sfortuna: 51 },
    { id: 49, nome: "Il portiere para il rigore ma la palla torna alla punta che segna", sfortuna: 66 },
    { id: 50, nome: "Il guardalinee sbaglia ed alza la bandierina, la difesa si ferma e subisce gol", sfortuna: 71 }
  ];
  ];


     const avviaGioco = () => {
    const mazzoCopiato = [...mazzoDelle50Sfortune];
    const estratte = [];
    for (let i = 0; i < 4; i++) {
      const indiceCasuale = Math.floor(Math.random() * mazzoCopiato.length);
      estratte.push(mazzoCopiato.splice(indiceCasuale, 1)[0]);
    }
    const primeTre = [estratte[0], estratte[1], estratte[2]].sort((a, b) => a.sfortuna - b.sfortuna);
    setTimeline(primeTre);
    setDaCollocare(estratte[3]);
    setSchermata('GIOCO');
  };

  const controllaScelta = (indiceScelto) => {
    let corretto = false;
    const valore = daCollocare.sfortuna;
    if (indiceScelto === 0 && valore < timeline[0].sfortuna) corretto = true;
    else if (indiceScelto === 1 && valore > timeline[0].sfortuna && valore < timeline[1].sfortuna) corretto = true;
    else if (indiceScelto === 2 && valore > timeline[1].sfortuna && valore < timeline[2].sfortuna) corretto = true;
    else if (indiceScelto === 3 && valore > timeline[2].sfortuna) corretto = true;

    if (corretto) {
      setEsito('HAI INDOVINATO! 🎉 La tua intuizione calcistica è perfetta.');
    } else {
      setEsito('HAI SBAGLIATO! ❌ Non era quella la posizione corretta.');
    }
    setSchermata('RISULTATO');
  };

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


{schermata === 'GIOCO' && daCollocare && (
        <ScrollView contentContainerStyle={styles.schermataGioco}>
          <Text style={styles.titoloSezione}>LA CARTA DA INSERIRE:</Text>
          <View style={styles.cartaSpeciale}>
            <Text style={styles.testoCarta}>{daCollocare.nome}</Text>
          </View>

          <Text style={styles.titoloSezione}>LA TUA TIMELINE ATTUALE:</Text>
          <View style={styles.cronologia}>
            {timeline.map((item, index) => (
              <View key={index} style={styles.cartaNormale}>
                <Text style={styles.testoCartaMazzo}>{item.nome}</Text>
                <Text style={styles.puntiSfortuna}>Sfortuna: {item.sfortuna}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.titoloSezione}>DOVE VUOI POSIZIONARLA?</Text>
          <View style={styles.scatolaBottoni}>
            <Button title={"Inserisci prima di tutto (Meno di " + timeline[0].sfortuna + ")"} color="gray" onPress={() => controllaScelta(0)} />
            <Text></Text> 
            <Button title={"Inserisci tra " + timeline[0].sfortuna + " e " + timeline[1].sfortuna} color="gray" onPress={() => controllaScelta(1)} />
            <Text></Text>
            <Button title={"Inserisci tra " + timeline[1].sfortuna + " e " + timeline[2].sfortuna} color="black" onPress={() => controllaScelta(2)} />
            <Text></Text>
            <Button title={"Inserisci alla fine (Più di " + timeline[2].sfortuna + ")"} color="gray" onPress={() => controllaScelta(3)} />
          </View>
        </ScrollView>
      )}

{schermata === 'RISULTATO' && daCollocare && (
        <View style={styles.schermataCentrata}>
          <Text style={styles.titoloSezione}>ESITO DELLA SCELTA:</Text>
          <Text style={styles.testoEsito}>{esito}</Text>
          
          <View style={styles.cartaSpeciale}>
            <Text style={styles.testoCarta}>{daCollocare.nome}</Text>
            <Text style={styles.puntiSfortuna}>Valore reale di sfortuna: {daCollocare.sfortuna}</Text>
          </View>

          <Button title="GIOCA ANCORA" color="black" onPress={avviaGioco} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 50 
  },
  schermataCentrata: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  titoloHome: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  sottotitoloHome: { 
    fontSize: 16, 
    color: 'gray', 
    marginBottom: 40, 
    textAlign: 'center' 
  },
  schermataGioco: { 
    padding: 20, 
    alignItems: 'center' 
  },
  titoloSezione: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: 'gray', 
    marginTop: 20, 
    marginBottom: 10, 
    letterSpacing: 1 
  },
  cartaSpeciale: { 
    backgroundColor: '#fff', 
    borderWidth: 3, 
    borderColor: 'black', 
    borderRadius: 12, 
    padding: 20, 
    width: '100%', 
    marginBottom: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 5 
  },
  cartaNormale: { 
    backgroundColor: '#f9f9f9', 
    borderWidth: 1, 
    borderColor: '#e0e0e0', 
    borderRadius: 8, 
    padding: 15, 
    marginBottom: 10 
  },
  cronologia: { 
    width: '100%', 
    marginBottom: 10 
  },
  scatolaBottoni: { 
    width: '100%', 
    marginBottom: 30 
  },
  testoCarta: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: 'black', 
    textAlign: 'center' 
  },
  testoCartaMazzo: { 
    fontSize: 15, 
    color: '#333' 
  },
  puntiSfortuna: { 
    fontSize: 13, 
    fontWeight: 'bold', 
    color: 'red', 
    marginTop: 5 
  },
  testoEsito: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    paddingHorizontal: 10 
  }
});
