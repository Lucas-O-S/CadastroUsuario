// src/Styles/TelaPrincipalStyles.js
import { StyleSheet } from "react-native";
import BaseStyles from "./BaseStyles";
import Colors from "./colors";

const styles = StyleSheet.create({
  container: {
    ...BaseStyles.container,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: Colors.primary,
    textAlign: "center",
  },
  button: {
    ...BaseStyles.button,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    ...BaseStyles.buttonText,
    fontSize: 18,
  },
});

export default styles;
