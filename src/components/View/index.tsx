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
  const style = className ? styles[className] : undefined;
  return <View style={style}>{children}</View>;
};

export const SafeArea = ({ className, children }: Props) => {
  return (
    <SafeAreaView
      style={className ? styles[className] : undefined}
      edges={["left", "right"]}
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
    <ViewArea className="viewContainerText">
      <Title>{text}</Title>
    </ViewArea>
  );
};

export const ContainerLogotipo = () => (
  <ContainerImage>
    <Spotity />
  </ContainerImage>
);
