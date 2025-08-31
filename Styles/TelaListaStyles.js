import { StyleSheet } from "react-native";
import styles from "./TelaPrincipalStyles";
import colors from "./colors";


const Styles = StyleSheet.create({
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

  },
  buttonText: {
    ...BaseStyles.buttonText,
  },
});

export default styles