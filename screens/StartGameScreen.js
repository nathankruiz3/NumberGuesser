import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import CardView from "../components/CardView";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredNum, setEnteredNum] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNum, setConfirmedNum] = useState("");

  const numInputHandler = (typed) => {
    setEnteredNum(typed.replace(/[^0-9]/g, ""));
  };

  const resetButtonHandler = () => {
    setEnteredNum("");
    setConfirmed(false);
  };

  const confirmButtonHandler = () => {
    const chosenNum = parseInt(enteredNum);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "Invalid Number!",
        "Value has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetButtonHandler,
          },
        ]
      );
      return;
    }
    setConfirmed(true);
    setConfirmedNum(chosenNum);
    setEnteredNum("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={{ padding: 10, alignItems: "center" }}>
        <Text>You selected...</Text>
        <NumberContainer>{confirmedNum}</NumberContainer>
        <View style={styles.startGameButton}>
          <Button
            color={colors.accent}
            title="START GAME"
            onPress={() => props.onStartGame(confirmedNum)}
          />
        </View>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <CardView style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.numberInput}
            keyboardType="number-pad"
            blurOnSubmit
            maxLength={2}
            onChangeText={numInputHandler}
            value={enteredNum}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <Button color="red" title="Reset" onPress={resetButtonHandler} />
            </View>
            <View style={styles.buttonView}>
              <Button
                color="green"
                title="Confirm"
                onPress={confirmButtonHandler}
              />
            </View>
          </View>
        </CardView>
        <CardView style={{ margin: 15 }}>{confirmedOutput}</CardView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  numberInput: {
    width: 45,
    height: 35,
    marginVertical: 5,
    borderColor: colors.accent,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
  },
  buttonView: {
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  startGameButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});

export default StartGameScreen;
