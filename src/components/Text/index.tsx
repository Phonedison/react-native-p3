import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  children?: string;
  className?: string;
  style?: StyleProp<TextStyle>;
};

export const Title = ({ children, style }: Props) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};
export const SubTitle = ({ children, style }: Props) => {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
};

export const TextButton = ({ children, style }: Props) => {
  return <Text style={[styles.textButton, style]}>{children}</Text>;
};
