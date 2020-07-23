import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";
import CardView from "../components/CardView";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Your number is...</Text>
      <NumberContainer>{props.lastGuess}</NumberContainer>

      <Text style={styles.text}>
        The computer guessed your number in {props.rounds} rounds.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.accent}
          title="NEW GAME"
          onPress={props.onNewGame}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: colors.accent,
    borderTopWidth: 3,
    borderBottomColor: colors.accent,
    borderBottomWidth: 3,
  },
  card: {
    padding: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.accent,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginVertical: 15,
    padding: 5,
  },
});

export default GameOverScreen;
