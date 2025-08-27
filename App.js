import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import UsuarioModel from "./Models/UsuarioModel";

const usuarioModel = new UsuarioModel();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Codigo</Text>
      <TextInput
        onChange={text => {
          
        }}
      ></TextInput>
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
