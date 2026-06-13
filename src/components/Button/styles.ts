import { StyleSheet } from "react-native";

const green = "#00D461";
const black = "#0A0A0A";

export const styles = (variant?: "primary" | "secondary") =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingHorizontal: 32,
      borderWidth: 1,
      borderRadius: 50,
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
    },
    primary: {
      backgroundColor: green,
      borderColor: green,
      color: black,
    },
    secondary: {
      backgroundColor: black,
      borderColor: "#ffffff42",
    },
    text: {
      fontSize: 16,
      fontWeight: "800",
      color: variant === "secondary" ? "#fff" : black,
    },
  });
