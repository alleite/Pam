import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[base, setBase]= useState(0); // inicializando o estado da variavel com o valor 0, quando for string ""
  const[altura,setAltura] = useState(0);
  const[area, setArea] = useState(0);

  function calcularArea(){
    if (base > 0 && altura > 0)
    {
      setArea((parseFloat(base) * parseFloat(altura))/2);
    }
    else{
      setArea('');
    }
  }

  return ( //usa-se XML dentro de javascript
    <View style={styles.container}> 
      <Text style ={styles.titulo}>Cáculo da Área do triângulo</Text>

<Text style={styles.texto}>Digite a base do triângulo:</Text>
<TextInput
placeholder='Digite o valor da base'
style={styles.caixa}
keyboardType={'numeric'} //teclado só com números 
onChangeText={base => setBase(base)} //guarda o valor no atributo do meio no caso o 'setBase'
>
</TextInput>
<Text style={styles.texto}>Digite a altura do triângulo:</Text>
<TextInput
placeholder='Digite o valor da altura'
style={styles.caixa}
keyboardType={'numeric'}
onChangeText={altura => setAltura(altura)}
>
</TextInput>

<Button
style={styles.botao}
title='Calcular Área'
onPress={calcularArea}
>
</Button>
<Text style={styles.resul}>{area ? `Área do triângulo ${area} ` : '' }</Text> 
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
  titulo:{
    color:'#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  texto:{
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
  }
});
