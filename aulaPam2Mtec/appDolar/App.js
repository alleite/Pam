import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState(0);
  const [real, setReal] = useState(0);

  function converDolar() {
    if (dolar > 0) {
      setReal(((parseFloat(dolar)) / 4.89).toFixed(2));
    }
    else{
      setReal ('');
    }
  }
  return (
    <View style={styles.container}>
      <Text style ={styles.titulo}>Conversor de dolár americano para real brasileiro</Text>


<Text style={styles.texto}>Quantidade em dolár:</Text>
<TextInput
placeholder='Quantidade em dolár'
style={styles.caixa}
keyboardType={'numeric'}
onChangeText={dolar => setDolar(dolar)}
>
</TextInput>

<Button
style={styles.botao}
title='Converter para real'
onPress={converDolar}
>
</Button>
<Text style={styles.resul}>{real ? `Valor em real ${real} ` : '' }</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:20,
    textAlign: 'center',
  },
  texto: {
    color: '#543',
    fontSize: 17,
    textAlign: 'center'
  },
  caixa:{
    textAlign: 'center',
    borderWidth: 4,
    width:190,
    height:33,
    borderColor: '#444',
    borderRadius: 10, 
    fontSize:18,
    marginBottom: 10, 
    marginTop: 10,
  }, 
});