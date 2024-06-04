import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'


import Principal from './src/telas/Principal';
import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import Tela3 from './src/telas/Tela3';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Tela1') {
          iconName = focused
            ? 'home-outline'
            : 'bed-outline';
        } else if (route.name === 'Tela2') {
          iconName = focused ? 'person-outline' : 'body-outline';
        }else if (route.name === 'Tela3') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Tela1" component={Tela1}></Tab.Screen>
      <Tab.Screen name= "Tela2" component={Tela2}></Tab.Screen>
      <Tab.Screen name= "Tela3" component={Tela3}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>

        <Stack.Screen
          name="Tela1"
          component={Tabs}
          options={{
            title: 'Tela 1',
            headerStyle: {
              backgroundColor: '#3f64c7',
            },
            headerTintColor: '#FFF',
            headerShown: true
          }}
        >

        </Stack.Screen>
        <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
        <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
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


