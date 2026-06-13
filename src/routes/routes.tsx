import { useState } from "react";
import { TransitionScreen } from "../components/TransitionScreen";
import { Authentication } from "../screens/Authentication";
import { Home } from "../screens/Home";

export const Routes = () => {
  const [screen, setScreen] = useState<"home" | "auth">("home");

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
