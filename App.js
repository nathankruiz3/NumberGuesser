import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setGuessRounds(rounds);
  };

  const startNewGame = () => {
    setUserNumber("");
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        lastGuess={userNumber}
        rounds={guessRounds}
        onNewGame={startNewGame}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Guess A Number!" />
      {content}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({});
