import { StyleSheet } from "react-native";

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
      backgroundColor: "#00D461",
      borderColor: "#00D461",
      color: "#0A0A0A",
    },
    secondary: {
      backgroundColor: "#0A0A0A",
      borderColor: "#ffffff42",
    },
    text: {
      fontSize: 16,
      fontWeight: "800",
      color: variant === "secondary" ? "#fff" : "#0A0A0A",
    },
  });
