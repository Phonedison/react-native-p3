import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spotity } from "../../components/Image";
import { Title } from "../../components/Text";
import { styles } from "./styles";

type Props = {
  className?: keyof typeof styles;
  children?: React.ReactNode;
  text?: string;
};

export const ViewArea = ({ className, children }: Props) => {
  return (
    <View style={className ? styles[className] : undefined}>{children}</View>
  );
};

export const SafeArea = ({ children }: Props) => {
  return (
    <SafeAreaView
      style={styles.SafeAreaContainer}
      edges={["left", "right", "bottom", "top"]}
    >
      {children}
    </SafeAreaView>
  );
};

export const ContainerImage = ({ children }: Props) => {
  return <ViewArea className="viewContainerImage">{children}</ViewArea>;
};

export const ContainerTitle = ({ text }: Props) => {
  return (
    <ViewArea>
      <Title>{text}</Title>
    </ViewArea>
  );
};

export const ContainerLogotipo = () => (
  <ContainerImage>
    <Spotity />
  </ContainerImage>
);
