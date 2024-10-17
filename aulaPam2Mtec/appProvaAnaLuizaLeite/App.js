import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView } from 'react-native';
import axios from 'axios';

import {Ionicons} from '@expo/vector-icons';

export default function App(){
  
  const mensagemDuplicidade = () =>
    Alert.alert(
      "Erro ao Salvar",
      "Nome Já Cadastrado",
      [
        
        { text: "OK", onPress: () => setAbrir(true) }
      ],
      { cancelable: true }
    ); 

  const api = 'http://10.68.36.119/provaAnaLeite/';
  const [lista, setLista] = useState([]);
  const [banda, setBanda] = useState(''); 
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  {/* state para tela de cadastro modal */}
  const[abrir, setAbrir] = useState(false);

  useEffect(()=> {
    listarDados();
  },[])

   
  async function listarDados(){
    const res = await axios.get(api + 'listar.php?busca=' + buscar);
    setLista(res.data.result);
   
  }

  async function add(){
    const obj = {banda, id};  

      const res = await axios.post(api + 'add.php', obj);
       if(res.data.success === true){
      
         limparCampos();       
      }

      if(res.data.success === 'Banda de rock já Cadastrada! '){  
        mensagemDuplicidade();
        
      }     
    
    
    listarDados();
    setAbrir(false);   
    }
 
  function limparCampos(){
        setBanda('');
        setId('0');
  }

  return (
    <View style={estilos.container}>
    <View style={estilos.navbar}>
      
    <Text style={estilos.textonavbar}>Bandas de Rock</Text>      
    
    <TouchableOpacity
      
      style={estilos.botao}
      onPress={ () => setAbrir(true)}
      >
        <Ionicons name="add" size={30} color="#FFF"></Ionicons>
        
      </TouchableOpacity>
    </View>


{/*lista os dados cadastro  */ }
   
    <ScrollView>
    <View style={estilos.grid}>
    
      {lista.map(item => (
        <View style={estilos.griditem} key={item.id}><Text style={{color: '#FFF'}}>{item.id} - {item.banda} </Text>

                                 
      </View>
     ))}        
    </View>
    </ScrollView>


{/*tela cadastro  */ }
     <Modal    
      transparent={false}
      visible={abrir}
      >
        <SafeAreaView style={estilos.modal}>

          <View style={estilos.modalHeader}>
          <TouchableOpacity
              onPress={ () => setAbrir(false)}
          >
           <Ionicons style={{marginLeft:5, marginRight:5}} name="arrow-back" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
        <Text style={estilos.textoModal}>Inserir nome da banda:</Text>
        </View>


   <TextInput 
      type="text"
      style={estilos.input}
      placeholder="Nome da banda"
      value={banda}
      onChangeText={ (banda) => setBanda(banda)} 
      />

       
      <TouchableOpacity  
      style={estilos.botaoModal}
      onPress={add}
      >
        <Text  style={estilos.textoBotaoModal}>Salvar</Text>
      </TouchableOpacity>


      </SafeAreaView>
      </Modal>

 </View> 
    );
}


const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#1C1C1C'
    
  },

  container:{
    backgroundColor: '#000',
    flex: 2
  },

  textoModal:{    
    color: '#FFF',    
    marginLeft: 15,
    fontSize:25,       
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:30,
    
  },

  input:{
    backgroundColor: '#F8F8FF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize:13
  },
  botaoModal:{
    backgroundColor: '#8B0000',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',
    
  },
  textoBotaoModal:{
    fontSize:16,
    color:'#FFF',

  },

  navbar:{
    backgroundColor: '#8B0000',
    padding: 12,
    color: '#FFF',
    flexDirection:'row',
    marginTop: 35,

  },

  textonavbar:{
    fontSize:20,
    color:'#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao:{
    position: 'absolute', 
    right: 13,
    marginTop: 11,
  },


  grid:{
    marginTop: 8,
    backgroundColor: '#1C1C1C',   
  },

  griditem:{
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth,   
  },

});