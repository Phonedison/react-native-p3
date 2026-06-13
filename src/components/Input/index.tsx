import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type InputVariant = "text" | "password";
type InputIcon = "look" | "email";

type Props = {
  variant?: InputVariant;
  icon?: InputIcon;
  text?: string;
};
const iconMap = {
  user: { uri: "https://www.svgrepo.com/show/524211/user.svg" },
  passwordLock: {
    uri: "https://www.svgrepo.com/show/524126/password-minimalistic-input.svg",
  },
  passwordUnlock: {
    uri: "https://www.svgrepo.com/show/524127/password-minimalistic.svg",
  },
};

export const Input = ({ variant = "text", text }: Props) => {
  const [isSecure, setIsSecure] = useState(variant === "password");

  const toggle = () => {
    setIsSecure((prevState) => !prevState);
  };

  const getIcon = () => {
    if (variant !== "password") return iconMap.user;

    return isSecure ? iconMap.passwordUnlock : iconMap.passwordLock;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={text}
        style={styles.input}
        secureTextEntry={isSecure}
        textContentType={variant === "password" ? "password" : "none"}
        keyboardType="default"
      />

      {variant === "password" ? (
        <TouchableOpacity onPress={toggle} activeOpacity={0.7}>
          <Image source={getIcon()} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <Image source={getIcon()} style={styles.icon} />
      )}
    </View>
  );
};
