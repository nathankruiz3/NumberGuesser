import React from "react";
import { View, Text, StyleSheet, ImagePropTypes } from "react-native";

import colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberView}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberView: {
    width: 80,
    borderColor: colors.accent,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 24,
    color: colors.accent,
    fontWeight: "bold",
  },
});

export default NumberContainer;
