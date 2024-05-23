import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Tela3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela 3</Text>
      <Button 
      title="Voltar para tela principal"
      onPress={() => navigation.navigate("Principal")}>

      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});