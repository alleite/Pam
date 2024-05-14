import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[largura, setLargura]= useState(0); 
  const[altParede,setAltParede] = useState(0);
  const[altAzulejo, setAltAzulejo] = useState(0);
  const[largAzulejo, setLargAzulejo]= useState(0);
  const[aParede, setAParede]= useState(0);  
  const[aAzulejo, setAAzulejo]= useState(0);  
  const[quantAzulejo, setQuantAzulejo]= useState(0);  

  function calcular(){
    if((largura > 0 && altParede > 0) && (altAzulejo > 0 && largAzulejo > 0))
    {
      setAParede((parseFloat(largura) * parseFloat(altParede)).toFixed(2));
    
    
      setAAzulejo((parseFloat(largAzulejo) * parseFloat(altAzulejo)).toFixed(2));
    

      setQuantAzulejo((parseFloat(aParede) / parseFloat(aAzulejo)).toFixed(1));
    }
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Calculadora quantidade de azulejos </Text>

      <Text style={styles.texto}>Digite a altura da parede:</Text>
<TextInput
placeholder='Altura da parede'
style={styles.caixa}
keyboardType={'numeric'} 
onChangeText={altParede => setAltParede(altParede)} 
>
  </TextInput>
      <Text style={styles.texto}>Digite a largura da parede:</Text>
<TextInput
placeholder='Largura da parede'
style={styles.caixa}
keyboardType={'numeric'} 
onChangeText={largura => setLargura(largura)} 
>
  </TextInput>
      <Text style={styles.texto}>Digite a altura do azulejo:</Text>
<TextInput
placeholder='Altura do azulejo'
style={styles.caixa}
keyboardType={'numeric'} 
onChangeText={altAzulejo => setAltAzulejo(altAzulejo)} 
>
  </TextInput>
      <Text style={styles.texto}>Digite a largura do azulejo:</Text>
<TextInput
placeholder='Largura do azulejo'
style={styles.caixa}
keyboardType={'numeric'} 
onChangeText={largAzulejo => setLargAzulejo(largAzulejo)} 
>
  </TextInput>
  <Button
style={styles.botao}
title='Calcular quantidade'
onPress={calcular}
>
</Button>

<Text style={styles.resul}>{aAzulejo ? `Área do azulejo ${aAzulejo} ` : '' }</Text>
<Text style={styles.resul}>{aParede ? `Área da parede ${aParede} ` : '' }</Text>
<Text style={styles.resul}>{quantAzulejo ? `Quantidade de azulejos ${quantAzulejo} ` : '' }</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  texto:{
    fontSize: 20,
    color: '#191970',
  },
  caixa:{
    fontSize: 17,
    backgroundColor: '#F8F8FF',
    color: '#000',
    width: 250,
    textAlign:'center',
    marginBottom:10,
    borderWidth: 1,
    borderColor: '#000000',
  },


});
