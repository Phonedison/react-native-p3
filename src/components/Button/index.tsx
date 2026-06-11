import { TouchableOpacity } from "react-native";
import { ImgButton } from "../Image";
import { TextButton } from "../Text";
import { ViewArea } from "../View";
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

export const ListButton = () => (
  <ViewArea className="viewContainerButton">
    <Button variant="primary" children="Sign up Free" />
    <Button variant="secondary" children="Continue with phone number" />
    <Button variant="secondary" children="Continue with Google" icon="gmail" />
    <Button
      variant="secondary"
      children="Continue with Facebook"
      icon="facebook"
    />
  </ViewArea>
);
