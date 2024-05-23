import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Principal</Text>
      <Button 
      title="ir para tela 1"
      onPress={() => navigation.navigate("Tela1")}>

      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});