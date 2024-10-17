import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Checkbox, Image} from "react-native";

export default function Tela2({ navigation }) {
  // const [checked, setChecked] = useState(false);
  // const [checkedPedra, setCheckedPedra] = useState(false);
  // const [checkedManecao, setCheckedManecao] = useState(false);
  // const [checkedAguas, setCheckedAguas] = useState(false);
  // const [checkedMuseu, setCheckedMuseu] = useState(false);
  // const [checkedMel, setCheckedMel] = useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoNome}>Escolha quais pontos turísticos você quer visitar: </Text>
        <View>
        <Image
          styles={styles.image}
          source={require('../../../assets/image.png')}></Image>

          {/* <Checkbox
            style={styles.areaRadio}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Cachoeira do Faú</Text>

          <Checkbox
            style={styles.areaRadio}
            status={checkedPedra ? 'checked' : 'unchecked'}
            onPress={() => setCheckedPedra(!checkedPedra)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Cachoeira da Pedra Grande</Text>

          <Checkbox
            style={styles.areaRadio}
            status={checkedManecao ? 'checked' : 'unchecked'}
            onPress={() => setCheckedManecao(!checkedManecao)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Serra do Manecão</Text>

          <Checkbox
            style={styles.areaRadio}
            status={checkedAguas ? 'checked' : 'unchecked'}
            onPress={() => setCheckedAguas(!checkedAguas)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Legado das Águas</Text>

          <Checkbox
            style={styles.areaRadio}
            status={checkedMuseu ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMuseu(!checkedMuseu)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Museu Municipal Pedro Laragnoit</Text>

          <Checkbox
            style={styles.areaRadio}
            status={checkedMel ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMel(!checkedMel)}>
          </Checkbox>
          <Text style={styles.textoPontos}>Cachoeira do Mel</Text> */}
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
  areaRadio: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
