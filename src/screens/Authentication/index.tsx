import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { Spotity } from "../../components/Image";
import { Input } from "../../components/Input";
import { SubTitle } from "../../components/Text";
import { ContainerImage, SafeArea, ViewArea } from "../../components/View";
import { styles } from "./styles";

export const Authentication = ({ irParaHome }: any) => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <SafeArea className={"SafeAreaContainer"}>
          <LinearGradient
            colors={["rgba(0, 212, 95, 0.336)", "rgba(0,0,0,0.8)"]}
            style={styles.gradient}
          >
            <ViewArea className="viewContainer">
              <ViewArea className="viewContainerImage">
                <ContainerImage>
                  <Spotity />
                </ContainerImage>

                <ViewArea>
                  <SubTitle>Log in to continue.</SubTitle>
                </ViewArea>
              </ViewArea>

              <ViewArea>
                <ViewArea className="viewContainer">
                  <Input text="Email ou username" variant="text" />
                  <Input text="digite a senha" variant="password" />
                </ViewArea>

                <ViewArea className="viewContainer">
                  <Button variant="primary" children="Logar" />
                  <Button
                    variant="secondary"
                    children="Cancelar"
                    action={irParaHome}
                  />
                </ViewArea>
              </ViewArea>
            </ViewArea>
          </LinearGradient>
        </SafeArea>
      </SafeAreaProvider>
    </>
  );
};
