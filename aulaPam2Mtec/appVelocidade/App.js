import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [velocidade, setVelocidade] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [distancia, setDistancia] = useState(0);

  function calcularVelocidade() {
    if (tempo > 0 && distancia > 0) {
      setVelocidade((parseFloat(distancia) * 1000) / (parseFloat(tempo) * 60));
    }
    else {
      setVelocidade('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo da velocidade em metros por segundo</Text>

      <Text style={styles.texto}>Digite a distância:</Text>
      <TextInput
        placeholder='distância em quilômetros '
        style={styles.caixa}
        keyboardType={'numeric'}
        onChangeText={distancia => setDistancia(distancia)}
      >
      </TextInput>
      <Text style={styles.texto}>Digite o tempo:</Text>
      <TextInput
        placeholder='tempo em horas '
        style={styles.caixa}
        keyboardType={'numeric'}
        onChangeText={tempo => setTempo(tempo)}
      >
      </TextInput>

      <Button
        title='Calcular Velocidade'
        onPress={calcularVelocidade} >
      </Button>

      <Text style={styles.resul}>{velocidade ? `A velocidade é: ${velocidade} m/s` : ''}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cda',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: "#Ab3424",
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 30,
  },
  titulo:{
    color:'#a35621',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    height:40,
    textAlign: 'center',
    fontSize: 23
  },
  resul:{
    color: '#A24',
    fontSize: 20,
    textAlign: 'center',
  },
});
