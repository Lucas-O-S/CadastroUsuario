import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import UsuarioModel from "./Models/UsuarioModel";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./Styles/TelaPrincipal";

export default function App() {
  const [codigo, setCodigo] = useState("");
  const [mostarCodigo, setMostartCodigo] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function LimparCampos() {
    setCodigo("");
    setMostartCodigo(false);
    setNome("");
    setEmail("");
    setSenha("");
    setRepetirSenha("");
  }

  async function Cadastrar() {
    try {
      let usuarioModel = new UsuarioModel(nome, email, senha);

      if (senha !== repetirSenha) {
        alert("Senhas devem ser idênticas");
        return;
      }

      if (usuarioModel.Cadastrar()) {
        const usuarioParaSalvar = {
          id: usuarioModel.id,
          nome: nome,
          email: email,
          senha: senha
        };
        await AsyncStorage.setItem("Usuario", JSON.stringify(usuarioParaSalvar));
        alert("Usuário cadastrado com sucesso!");
        setCodigo(usuarioModel.id.toString());
        setMostartCodigo(true);
      } else {
        alert("Erro ao cadastrar usuário");
      }
    } catch (error) {
      alert(`Erro ao cadastrar usuário: ${error.message}`);
    }
  }

  async function Buscar() {
    const jsonValue = await AsyncStorage.getItem("Usuario");
    if (jsonValue != null) {
      const usuarioModel = JSON.parse(jsonValue);
      setCodigo(usuarioModel.id.toString());
      setMostartCodigo(true);
      setNome(usuarioModel.nome);
      setEmail(usuarioModel.email);
      setSenha(usuarioModel.senha);
      setRepetirSenha(usuarioModel.senha);
    } else {
      alert("Usuário não encontrado");
    }
  }

  return (
    <View style={styles.container}>

      {mostarCodigo && (
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Código</Text>
          <TextInput
            style={[styles.input, { backgroundColor: '#eee' }]}
            value={codigo}
            editable={false}
          />
        </View>
      )}

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

      <TouchableOpacity style={styles.button} onPress={Cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={LimparCampos}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={Buscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

