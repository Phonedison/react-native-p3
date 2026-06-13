import React from "react";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

type Props = {
  className?: keyof typeof styles;
  children?: React.ReactNode;
  source?: ImageSourcePropType;
  logotipo?: String;
};

type logo = {
  logotipo: "gmail" | "facebook";
};

const listImg: { uri: string }[] = [
  {
    uri: "https://i.pinimg.com/736x/6f/c7/f0/6fc7f083d9254aca54b379d004fb0b0e.jpg",
  },
  { uri: "https://img.icons8.com/ios11/512/FFFFFF/spotify.png" },
  { uri: "https://logopng.com.br/logos/facebook-13.png" },
  { uri: "https://cdn-icons-png.flaticon.com/512/2875/2875404.png" },
];

const Logotipo = ({ source, className }: Props) => (
  <Image source={source} style={className ? styles[className] : undefined} />
);

export const BackgroundImage = ({ children }: Props) => (
  <ImageBackground
    source={listImg[0]}
    style={styles.background}
    resizeMode="cover"
  >
    {children}
  </ImageBackground>
);

export const Spotity = () => (
  <Logotipo source={listImg[1]} className="logotipo" />
);

export const ImgButton = ({ logotipo }: logo) => {
  const logos = {
    gmail: listImg[2],
    facebook: listImg[3],
  };

  return <Logotipo source={logos[logotipo]} className="imgButton" />;
};
