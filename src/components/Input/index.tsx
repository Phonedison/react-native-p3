import { TextInput } from "react-native";

type InputVariant = "user" | "password";
type InputIcon = "look" | "email";

type Props = {
  variant?: InputVariant;
  children: string;
  icon?: InputIcon;
};

export const Input = ({ variant }: Props) => {
  return <TextInput></TextInput>;
};
