import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";


export default function Tela3({ navigation }){
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
            <ScrollView>
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
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5f9ea0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });