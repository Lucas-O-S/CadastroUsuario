import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Styles/TelaPrincipalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export default function Listar({ navigation }) {
  const [usuariosList, setUsuariosList] = useState([]);
  const [listaAchada, setListaAchada] = useState(false);

  async function ImportList() {
    const jsonValue = await AsyncStorage.getItem("UsuarioList");
    if (jsonValue) {
      const lista = JSON.parse(jsonValue);
      setUsuariosList(lista);
      setListaAchada(true);

      lista.forEach((element) => {
        console.log(element);
      });
    } else {
      setListaAchada(false);
      setUsuariosList([]);
    }
  }

  useFocusEffect(
    useCallback(() => {
      ImportList();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text>Lista Usuários</Text>

      {listaAchada ? (
        usuariosList.map((usuario) => (
          <Text key={usuario.id}>{usuario.nome} - {usuario.email}</Text>
        ))
      ) : (
        <Text>Nenhum usuário encontrado</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
