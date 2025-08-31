import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import styles from "../Styles/TelaListaStyles";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import UsuarioController from "../Controller/UsuarioController";

export default function Listar({ navigation }) {
  const [usuariosList, setUsuariosList] = useState([]);
  
  // Função para carregar lista
  const carregarUsuarios = async () => {
    const data = await UsuarioController.List();
    setUsuariosList(data || []);
  };

  useFocusEffect(
    useCallback(() => {
      carregarUsuarios();
    }, [])
  );

  const chamarExclusao = (id) => {
    Alert.alert(
      "Confirmar exclusão",
      "Deseja realmente excluir este usuário?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: async () => {
            await UsuarioController.Excluir(id);
            carregarUsuarios();
          } 
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: 22, marginTop: 10, marginBottom: 20, textAlign: 'center', color: '#4A148C' }]}>Lista de Usuários</Text>

      <View style={{ flex: 1, backgroundColor: '#F7F3FF', borderRadius: 12, padding: 8 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {usuariosList.length > 0 ? (
            usuariosList.map((usuario) => (
              <View key={usuario.id} style={styles.usuarioCard}>
                <Text style={styles.usuarioTexto}>
                  {usuario.nome} - {usuario.email}
                </Text>
                <View style={styles.usuarioBotoes}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Editar", { usuario })}
                  >
                    <Text style={styles.buttonText}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#FF4D4F" }]}
                    onPress={() => chamarExclusao(usuario.id)}
                  >
                    <Text style={styles.buttonText}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={{ textAlign: 'center', color: '#999', marginTop: 40, fontSize: 16 }}>Nenhum usuário encontrado</Text>
          )}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

