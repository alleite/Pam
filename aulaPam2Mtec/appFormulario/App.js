import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState(0);
  const [valor, setValor] = useState(15000);
  const [utilitario, setUtilitario] = useState(false);
  const [checked, setChecked] = useState('Masculino');

  const modelos = [
    { modeloNome: 'Hatch', valor: 1 },
    { modeloNome: 'Pickup', valor: 2 },
    { modeloNome: 'Sedan', valor: 3 },
    { modeloNome: 'SUV', valor: 4 },
  ]

  function enviarDados(){
    if(nome == '' || carro == '')
    {
      alert('Preecha todos os campos corretamente')
    }
    else{
      alert('Informações do carro: \n\n ' +
    'Nome Proprietário: ' + nome + '\n' +
    'Sexo: ' + checked +'\n' +
    'Placa: ' + placa + '\n' +
    ' Carro: ' + carro + '\n' +
    'Modelo: ' + modelos[modelo].modeloNome + '\n' +
    'Valor: ' + valor.toFixed(2) + '\n' + 
    'Carro Utilitário: ' + (utilitario ? 'Sim' : 'Não')
    )
    }
  }

  let modeloItems = modelos.map((v,k) => {
    return <Picker.Item key={k} value = {k} label={v.modeloNome}></Picker.Item>
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações do carro particular</Text>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome Proprietário: </Text>
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='Digite aqui o nome do proprietário'></TextInput>
        <View style={styles.areaRadio}>
          <RadioButton
            value="Masculino"
            status={checked == 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}>

          </RadioButton>
          <Text>Masculino</Text>
          <RadioButton
            value="Feminino"
            status={checked == 'Feminino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Feminino')}>

          </RadioButton>
          <Text>Feminino</Text>
        </View>

        <Text style={styles.textoNome}>Carro: </Text>
        <TextInput
          style={styles.input}
          onChangeText={carro => setCarro(carro)}
          placeholder='Digite aqui o nome do carro'></TextInput>

        <Text style={styles.textoNome}>Placa: </Text>
        <TextInput
          style={styles.input}
          onChangeText={placa => setPlaca(placa)}
          placeholder='Digite aqui a placa'></TextInput>
        <View style={styles.areaModelo}>
          <Text style={styles.textoNome}>Modelo:</Text>
          <Picker style={styles.pickerModelo}
            selectedValue={modelo}
            onValueChange={(itemValue, itemIndex) => setModelo(itemValue)}>
            {modeloItems}
          </Picker>
        </View>

        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}>Valor do carro:</Text>
          <Text style={styles.carroTexto}>R${valor.toFixed(0)}</Text>
        </View>
        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='#BEF0BC'
            minimumValue={15000}
            maximumValue={300000}
            value={valor}
            onValueChange={(valor) => setValor(valor)}>
          </Slider>
        </View>

        <View style={styles.areaUtilitario}>
          <Text style={styles.textoNome}>Utilitário</Text>
          <Switch
            style={{ paddingTop: 15 }}
            value={utilitario}
            onValueChange={utilitario => setUtilitario(utilitario)}>

          </Switch>
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}>
          <Text style={styles.botaoTexto}>Mostrar dados carro</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#C9BCF0',
  
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },

  areaModelo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerModelo:{
  flex:1
},
valorArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
valorTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaUtilitario:{
  flexDirection: 'column', 
  alignItems: 'center'
},
areaRadio:{
  flexDirection: 'row', 
  alignItems: 'center',
 
},
botao:{
  backgroundColor: '#553D9D',
  width: '60%',
  alignSelf: "center",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 20,
},
botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
input:{
borderWidth: 0.5,
borderColor: '#000',
width: '90%',
borderRadius: 5,
padding: 10,
marginBottom: 5,
justifyContent: "center",
marginHorizontal: 5,
alignSelf: "center",
backgroundColor: '#fff',
height: 45,
},
titulo:
{
  fontSize: 22,
  color: "#000",
  marginLeft: 23,
  marginTop: 15,
  fontWeight: 'bold'
}
});

