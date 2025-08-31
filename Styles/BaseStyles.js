// src/Styles/BaseStyles.js
import { StyleSheet } from "react-native";
import Colors from "./colors";

const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.textSecondary,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});

export default BaseStyles;
