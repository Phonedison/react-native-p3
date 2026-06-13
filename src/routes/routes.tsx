import { useState } from "react";
import { TransitionScreen } from "../components/TransitionScreen";
import { Authentication } from "../screens/Authentication";
import { Home } from "../screens/Home";

type typeScreen = "home" | "auth";

export const Routes = () => {
  const [screen, setScreen] = useState<typeScreen>("home");

  return (
    <TransitionScreen key={screen}>
      {screen === "home" ? (
        <Home irParaAuthentication={() => setScreen("auth")} />
      ) : (
        <Authentication irParaHome={() => setScreen("home")} />
      )}
    </TransitionScreen>
  );
};
