import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Styles/TelaPrincipalStyles";

export default function TelaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Listar")}
      >
        <Text style={styles.buttonText}>Listar Usuários</Text>
      </TouchableOpacity>
    </View>
  );
}
