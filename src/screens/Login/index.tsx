import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListButton } from "../../components/Button";
import { BackgroundImage, Spotity } from "../../components/Image";
import { Title } from "../../components/Text";
import { ContainerImage, SafeArea, ViewArea } from "../../components/View";
import { styles } from "./styles";

export const Login = () => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <SafeArea className={"SafeAreaContainer"}>
          <BackgroundImage className="background">
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,1)", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            >
              <ViewArea className="viewContainer">
                <ContainerImage>
                  <Spotity />
                </ContainerImage>

                <ViewArea className="viewContainerText">
                  <Title>Millions of Songs. Free on Spotify.</Title>
                </ViewArea>

                <ListButton />
              </ViewArea>
            </LinearGradient>
          </BackgroundImage>
        </SafeArea>
      </SafeAreaProvider>
    </>
  );
};
