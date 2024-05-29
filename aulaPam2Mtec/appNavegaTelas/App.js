import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import Principal from './src/telas/Principal';
import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import Tela3 from './src/telas/Tela3';


export default function App() {

  const [checked2, setChecked2] = useState('Carro própio');


  function enviarDados() {
    if (nome == '' || telefone == '') {
      alert('Preecha todos os campos corretamente')
    }
    else {
      alert('Informações do cadastro: \n\n' +
        'Nome do cliente: ' + nome + '\n' +
        'telefone: ' + telefone + '\n' +
        'RG: ' + Rg + '\n' +
        'Pontos turísticos que irá visitar: ' + checked + '\n' +
        'Transporte que utilizará: ' + checked2 + '\n' +
        'Quantidade de dias: ' + dias.toFixed(0) + '\n'
      )
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
          <Text style={styles.textoNome}>Escolha quais pontos turísticos você quer visitar: </Text>
          <View>
            <Checkbox
              style={styles.areaRadio}
              value="Cachoeira do Faú "
              status={checked == 'Cachoeira do Faú' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Cachoeira do Faú')}>
            </Checkbox>
            <Text style={styles.textoPontos}>Cachoeira do Faú</Text>
            <Checkbox
              style={styles.areaRadio}
              value="Cachoeira da Pedra Grande"
              status={checked == 'Cachoeira da Pedra Grande' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Cachoeira da Pedra Grande')}>

            </Checkbox>
            <Text style={styles.textoPontos}>Cachoeira da Pedra Grande</Text>
            <Checkbox
              style={styles.areaRadio}
              value="Serra do Manecão"
              status={checked == 'Serra do Manecão' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Serra do Manecão')}>

            </Checkbox>
            <Text style={styles.textoPontos}>Serra do Manecão</Text>
            <Checkbox
              style={styles.areaRadio}
              value="Legado das Águas "
              status={checked == 'Legado das Águas' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Legado das Águas')}>

            </Checkbox>
            <Text style={styles.textoPontos}>Legado das Águas</Text>
            <Checkbox
              style={styles.areaRadio}
              value="Museu Municipal Pedro Laragnoit"
              status={checked == 'Museu Municipal Pedro Laragnoit' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Museu Municipal Pedro Laragnoit')}>

            </Checkbox>
            <Text style={styles.textoPontos}>Museu Municipal Pedro Laragnoit</Text>
            <Checkbox
              style={styles.areaRadio}
              value="Cachoeira do Mel "
              status={checked == 'Cachoeira do Mel' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Cachoeira do Mel')}>

            </Checkbox>
            <Text style={styles.textoPontos}>Cachoeira do Mel</Text>
          </View>
          <View>
            <Text style={styles.textoNome}>Qual veículo você ira utilizar? </Text>
            <RadioButton
              style={styles.areaRadio}
              value="Carro própio"
              status={checked2 == 'Carro própio' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('Carro própio')}>

            </RadioButton>
            <Text style={styles.textoPontos}>Carro própio</Text>
            <RadioButton
              style={styles.areaRadio}
              value="Ônibus"
              status={checked2 == 'Ônibus' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('Ônibus')}>

            </RadioButton>
            <Text style={styles.textoPontos}>Ônibus</Text>
            <RadioButton
              style={styles.areaRadio}
              value="Van de turismo"
              status={checked2 == 'Van de turismo' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('Van de turismo')}>

            </RadioButton>
            <Text style={styles.textoPontos}>Van de turismo</Text>
            <RadioButton
              style={styles.areaRadio}
              value="Bicicletas"
              status={checked2 == 'Bicicletas' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('Bicicletas')}>

            </RadioButton>
            <Text style={styles.textoPontos}>Bicicletas</Text>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Mostrar dados do cliente</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#87c9ff',

  },
  image: {
    width: 20,
    height: 20
  },

  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome: {
    fontSize: 17,
    color: '#ffffff',
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
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaRadio: {
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  textoPontos: {
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  botao: {
    backgroundColor: ' #9bcc0c',
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
    fontSize: 40,
    color: "#fff",
    marginLeft: 23,
    marginTop: 15,
    fontWeight: 'bold'
  }
});


