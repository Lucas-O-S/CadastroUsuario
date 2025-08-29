import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import UsuarioModel from "./Models/UsuarioModel";
import { useState } from 'react';

const usuarioModel = new UsuarioModel();
const [codigo, setCodigo] = useState("");
const [mostarCodigo, setMostartCodigo] = useState(false);
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

function LimparCampos(){

}

function Cadastrar(){

}

function Buscar(){
  
}


export default function App() {
  return (
    <View style={styles.container}>
      {
        mostarCodigo &&       
        <>
          <Text>Codigo</Text>
          <TextInput>
          </TextInput>
        </>

      }
      <Text>Nome</Text>
      <TextInput
        onChange={text => {
          setNome(text);
        }}
      >

      </TextInput>

      <Text>email</Text>
      <TextInput
        onChange={text => {
          setEmail(text);
        }}
      >

      </TextInput>
      <Text>Nome</Text>
      <TextInput
        onChange={text => {
          setSenha(text);
        }}
      >

      </TextInput>

      <TouchableOpacity
              onPress={() =>{
          
        }}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
              onPress={() =>{
          
        }}>
        <Text>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>{

        }}
      >
        <Text>Buscar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
