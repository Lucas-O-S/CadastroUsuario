import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./Screens/PrincipalScreen";
import TelaCadastro from "./Screens/CadastroScreen";
import Listar from "./Screens/ListaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Listar" component={TelaListar} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
