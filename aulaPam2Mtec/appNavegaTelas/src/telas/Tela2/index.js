import React, {useState} from "react";
import { StyleSheet, Text, View, Button, ScrollView, Checkbox } from "react-native";

export default function Tela2({ navigation }) {
    const [checked, setChecked] = useState('Cachoeira do Faú');
    const [checkedPedra, setCheckedPedra] = useState('Cachoeira da Pedra Grande');
    const [checkedManecao, setCheckedManecao] = useState('Serra do Manecão');
    const [checkedAguas, setCheckedAguas] = useState('Legado das Águas');
    const [checkedMuseu, setCheckedMuseu] = useState('Museu Municipal Pedro Laragnoit');
    const [checkedMel, setCheckedMel] = useState('Cachoeira do Mel');

  return (
    <View style={styles.container}>
        <ScrollView>
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
              status={checkedPedra== 'Cachoeira da Pedra Grande' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedPedra('Cachoeira da Pedra Grande')}>

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
        </ScrollView>
      <Button 
      title="ir para tela 3"
      onPress={() => navigation.navigate("Tela3")}>
      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});