import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [Rg, setRg] = useState('');
  const [dias, setDias] = useState(365);
  const [checked, setChecked] = useState('Cachoeira do Faú');
  const [checked2, setChecked2] = useState('Carro própio');


  function enviarDados() {
    if (nome == '' || carro == '') {
      alert('Preecha todos os campos corretamente')
    }
    else {
      alert('Informações do cadastro: \n\n ' +
        'Nome do cliente: ' + nome + '\n' +
        'telefone: ' + telefone + '\n' +
        'RG: ' + Rg + '\n' +
        'Pontos turísticos que irá visitar: ' + checked + '\n' +
        'Transporte que utilizará: ' + checked2 + '\n' +
        'Quantidade de dias: ' + dias.toFixed(2) + '\n' 
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro do Hotel</Text>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome: </Text>
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='Digite aqui o seu nome:'></TextInput>
        <Text style={styles.textoNome}>Telefone: </Text>
        <TextInput
          style={styles.input}
          onChangeText={telefone => setTelefone(telefone)}
          placeholder='Digite aqui o seu telefone:'></TextInput>

        <Text style={styles.textoNome}>RG: </Text>
        <TextInput
          style={styles.input}
          onChangeText={Rg => setRg(Rg)}
          placeholder='Digite aqui o seu RG:'></TextInput>
        <View style={styles.areaRadio}>
          <Text style={styles.textoNome}>Escolha quais pontos turísticos você quer visitar: </Text>
          <Checkbox
            value="Cachoeira do Faú"
            status={checked == 'Cachoeira do Faú' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cachoeira do Faú')}>

          </Checkbox>
          <Text>Cachoeira do Faú</Text>
          <Checkbox
            value="Cachoeira da Pedra Grande"
            status={checked == 'Cachoeira da Pedra Grande' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cachoeira da Pedra Grande')}>

          </Checkbox>
          <Text>Cachoeira da Pedra Grande</Text>
          <Checkbox
            value="Serra do Manecão"
            status={checked == 'Serra do Manecão' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Serra do Manecão')}>

          </Checkbox>
          <Text>Serra do Manecão</Text>
          <Checkbox
            value="Legado das Águas "
            status={checked == 'Legado das Águas' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Legado das Águas')}>

          </Checkbox>
          <Text>Legado das Águas</Text>
          <Checkbox
            value="Museu Municipal Pedro Laragnoit"
            status={checked == 'Museu Municipal Pedro Laragnoit' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Museu Municipal Pedro Laragnoit')}>

          </Checkbox>
          <Text>Museu Municipal Pedro Laragnoit</Text>
          <Checkbox
            value="Cachoeira do Mel "
            status={checked == 'Cachoeira do Mel' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cachoeira do Mel')}>

          </Checkbox>
          <Text>Cachoeira do Mel</Text>

        <RadioButton
            value="Carro própio"
            status={checked2 == 'Carro própio' ? 'checked' : 'unchecked'}
            onPress={() => setChecked2('Carro própio')}>

          </RadioButton>
          <Text>Carro própio</Text>
          <RadioButton
            value="Ônibus"
            status={checked2 == 'Ônibus' ? 'checked' : 'unchecked'}
            onPress={() => setChecked2('Ônibus')}>

          </RadioButton>
          <Text>Ônibus</Text>
          <RadioButton
            value="Van de turismo"
            status={checked2 == 'Van de turismo' ? 'checked' : 'unchecked'}
            onPress={() => setChecked2('Van de turismo')}>

          </RadioButton>
          <Text>Van de turismo</Text>
          <RadioButton
            value="Bicicletas"
            status={checked2 == 'Bicicletas' ? 'checked' : 'unchecked'}
            onPress={() => setChecked2('Bicicletas')}>

          </RadioButton>
          <Text>Bicicletas</Text>
        </View>

        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}>Quantidade de dias:</Text>
          <Text style={styles.carroTexto}>{dias.toFixed(0)}</Text>
        </View>
        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='#BEF0BC'
            minimumValue={15000}
            maximumValue={300000}
            value={dias}
            onValueChange={(dias) => setDias(dias)}>
          </Slider>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}>
          <Text style={styles.botaoTexto}>Mostrar dados do cliente</Text>
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
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },

  areaModelo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerModelo: {
    flex: 1
  },
  valorArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  valorTexto: {
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaUtilitario: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  areaRadio: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  botao: {
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
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  input: {
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

