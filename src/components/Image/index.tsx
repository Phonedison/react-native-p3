import React from "react";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

type Props = {
  className?: keyof typeof styles;
  children?: React.ReactNode;
  source?: ImageSourcePropType;
  logotipo?: String;
};

const image = {
  uri: "https://i.pinimg.com/736x/6f/c7/f0/6fc7f083d9254aca54b379d004fb0b0e.jpg",
};
const logotipoSpotify = {
  uri: "https://img.icons8.com/ios11/512/FFFFFF/spotify.png",
};
const facebook = { uri: "https://logopng.com.br/logos/facebook-13.png" };
const gmail = {
  uri: "https://cdn-icons-png.flaticon.com/512/2875/2875404.png",
};

const Logotipo = ({ source, className }: Props) => (
  <Image source={source} style={className ? styles[className] : undefined} />
);

export const BackgroundImage = ({ className, children }: Props) => (
  <ImageBackground
    source={image}
    style={className ? styles[className] : styles.background}
    resizeMode="cover"
  >
    {children}
  </ImageBackground>
);

export const Spotity = () => (
  <Logotipo source={logotipoSpotify} className="logotipo" />
);

type logo = {
  logotipo: "gmail" | "facebook";
};

export const ImgButton = ({ logotipo }: logo) => {
  const logos = {
    gmail,
    facebook,
  };

  return <Logotipo source={logos[logotipo]} className="imgButton" />;
};
