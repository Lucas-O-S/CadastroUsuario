import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import styles from "../Styles/TelaCadastroStyles";
import UsuarioController from '../Controller/UsuarioController';

export default function TelaCadastroScreens({navigation}) {
  const [codigo, setCodigo] = useState("");
  //const [mostarCodigo, setMostartCodigo] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function LimparCampos() {
    setCodigo("");
    //setMostartCodigo(false);
    setNome("");
    setEmail("");
    setSenha("");
    setRepetirSenha("");
  }


  return (
    <View style={styles.container}>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.inputSenha}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Text style={styles.toggleButtonText}>{mostrarSenha ? "Ocultar" : "Mostrar"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Repetir senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.inputSenha}
            value={repetirSenha}
            onChangeText={setRepetirSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Text style={styles.toggleButtonText}>{mostrarSenha ? "Ocultar" : "Mostrar"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} 
      onPress={() => {
        UsuarioController.Create(nome, email, senha, repetirSenha).then(() => {
          LimparCampos();
        })
      }}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={LimparCampos}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

