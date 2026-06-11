import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Spotity } from "../../components/Image";
import { Title } from "../../components/Text";
import { ContainerImage, SafeArea, ViewArea } from "../../components/View";
import { styles } from "./styles";

export const Authentication = () => {
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

                <ViewArea className="viewContainerText">
                  <Title>Log in to continue.</Title>
                </ViewArea>
              </ViewArea>

              <ViewArea className="viewContainerText">
                <TextInput placeholder="text" style={{ color: "white" }} />
                <TextInput />
              </ViewArea>
            </ViewArea>
          </LinearGradient>
        </SafeArea>
      </SafeAreaProvider>
    </>
  );
};
