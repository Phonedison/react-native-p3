import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListButton } from "../../components/Button";
import { BackgroundImage, Spotity } from "../../components/Image";
import { Title } from "../../components/Text";
import { ContainerImage, SafeArea, ViewArea } from "../../components/View";
import { styles } from "./styles";

export const Home = ({ irParaAuthentication }: any) => {
  return (
    <>
      <StatusBar style="inverted" />
      <SafeAreaProvider>
        <SafeArea>
          <BackgroundImage>
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,1)", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            >
              <ViewArea className="viewContainer">
                <ContainerImage>
                  <Spotity />
                </ContainerImage>

                <ViewArea>
                  <Title>Millions of Songs. Free on Spotify.</Title>
                </ViewArea>

                <ListButton action={irParaAuthentication} />
              </ViewArea>
            </LinearGradient>
          </BackgroundImage>
        </SafeArea>
      </SafeAreaProvider>
    </>
  );
};
