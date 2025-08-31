// src/Styles/TelaCadastroStyles.js
import { StyleSheet } from "react-native";
import BaseStyles from "./BaseStyles";
import Colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.container,
    justifyContent: "center",
  },
  input: {
    ...BaseStyles.input,
  },
  inputSenha: {
    ...BaseStyles.input,
    flex: 1,
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleButton: {
    marginLeft: 10,
    padding: 5,
  },
  toggleButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  button: {
    ...BaseStyles.button,
    paddingVertical: 12,
    marginTop: 10,
  },
  buttonText: {
    ...BaseStyles.buttonText,
    fontSize: 16,
  },
});

export default styles;
