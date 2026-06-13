import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "./styles";

export const TransitionScreen = ({ children }: any) => {
  /* Estilização dos elementos */
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  /* Parametros de tempo */
  const timing = {
    toValue: 1,
    duration: 900,
    useNativeDriver: true,
  };

  const styled = { flex: 1, opacity, transform: [{ scale }] };
  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, timing),
      Animated.timing(opacity, timing),
    ]).start();
  }, []);

  return (
    <View style={styles.background}>
      <Animated.View style={[styles.container, { opacity }]}>
        {children}
      </Animated.View>
    </View>
  );
};
