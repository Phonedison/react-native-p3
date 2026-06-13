import { StyleSheet } from "react-native";

const space = 16;
const align = "center";

export const styles = StyleSheet.create({
  SafeAreaContainer: {
    backgroundColor: "#111111",
    flex: 1,
  },
  viewContainer: {
    gap: space,
    justifyContent: align,
    alignItems: "stretch",
    padding: space,
  },
  viewContainerImage: {
    alignItems: align,
  },
  viewContainerButton: {
    gap: 12,
    padding: space,
  },
});
