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
      <Text style ={styles.container}></Text>

    </View>
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
