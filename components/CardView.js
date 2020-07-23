import React from "react";
import { View, StyleSheet } from "react-native";

const CardView = (props) => {
  return (
    <View style={{ ...styles.cardView, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 8,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default CardView;
