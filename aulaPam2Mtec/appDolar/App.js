import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState(0);
  const [real, setReal] = useState(0);

  function converDolar() {
    if (dolar > 0) {
      setReal((parseFloat(dolar)) / 4.89);
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
    backgroundColor: '#54ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#543',
    fontSize: 15,
    textAlign: 'center'
  },
  caixa:{
    textAlign: 'center',
    borderWidth: 4,
    width:200,
    height:45,
    borderColor: '#444',
    borderRadius: 10, 
    fontSize:18
  },
  
});
