import { TouchableOpacity } from "react-native";
import { ImgButton } from "../Image";
import { TextButton } from "../Text";
import { styles } from "./styles";

type ButtonVariant = "primary" | "secondary";

type ButtonIcon = "gmail" | "facebook";

type Props = {
  variant?: ButtonVariant;
  children: string;
  icon?: ButtonIcon;
};

export const Button = ({ variant, children, icon }: Props) => {
  const variantStyle =
    variant === "primary"
      ? styles("primary").primary
      : styles("secondary").secondary;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles(variant).container, variantStyle]}
    >
      {icon && <ImgButton logotipo={icon} />}

      <TextButton style={[styles(variant).text]}>{children}</TextButton>
    </TouchableOpacity>
  );
};
