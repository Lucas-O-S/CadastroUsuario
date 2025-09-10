import React, { useEffect } from "react";
import ContadorIds from "./utils/ContadorIds";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./Screens/PrincipalScreen";
import TelaCadastro from "./Screens/CadastroScreen";
import TelaListar from "./Screens/ListaScreen";
import TelaEditar from "./Screens/EditarScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    ContadorIds.InicializarContador();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Listar" component={TelaListar} />
        <Stack.Screen name="Editar" component={TelaEditar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
