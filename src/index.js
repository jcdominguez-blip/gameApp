import { useFonts } from "expo-font";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { Header } from "./components";
import { colors } from "./constants";
import { StartGame, Game, GameOver } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [loaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const onHandleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onHandleGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const onHandleRestartGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <Game selectedNumber={userNumber} onHandleGameOver={onHandleGameOver} />;
    }

    if (guessRounds > 0) {
      return (
        <GameOver
          onHandleRestartGame={onHandleRestartGame}
          rounds={guessRounds}
          selectedNumber={userNumber}
        />
      );
    }

    return <StartGame onHandleStarGame={onHandleStarGame} />;
  };

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      <Content />
    </View>
  );
};

export default App;
