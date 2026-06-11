import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  SafeAreaContainer: {
    backgroundColor: "#111111",
    paddingTop: 40,
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
    alignItems: "center",
  },
  viewContainerImage: {
    width: "100%",
    alignItems: "center",
  },
  viewContainerText: {
    gap: 0,
  },
  viewContainerButton: {
    gap: 12,
    padding: 16,
  },
});
