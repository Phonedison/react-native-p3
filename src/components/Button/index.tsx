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
  action?: () => void;
};

export const Button = ({ variant, children, icon, action }: Props) => {
  const variantStyle =
    variant === "primary"
      ? styles("primary").primary
      : styles("secondary").secondary;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles(variant).container, variantStyle]}
      onPress={action}
    >
      {icon && <ImgButton logotipo={icon} />}

      <TextButton style={[styles(variant).text]}>{children}</TextButton>
    </TouchableOpacity>
  );
};

export const ListButton = ({ action }: any) => (
  <ViewArea className="viewContainerButton">
    <Button variant="primary" children="Sign up Free" action={action} />
    <Button variant="secondary" children="Continue with phone number" />
    <Button variant="secondary" children="Continue with Google" icon="gmail" />
    <Button
      variant="secondary"
      children="Continue with Facebook"
      icon="facebook"
    />
  </ViewArea>
);
