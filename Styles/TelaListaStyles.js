import { StyleSheet } from "react-native";
import BaseStyles from "./BaseStyles";
import Colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.container,
    justifyContent: "flex-start", // lista deve começar do topo
  },
  usuarioCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  usuarioTexto: {
    ...BaseStyles.label,
    marginBottom: 10,
  },
  usuarioBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    ...BaseStyles.button,
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    ...BaseStyles.buttonText,
  },
  voltarButton: {
    ...BaseStyles.button,
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '30%',
  },
});

export default styles;
