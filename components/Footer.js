import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Footer = () => {
  return <View style={styles.footer}></View>;
};

const styles = StyleSheet.create({
  footer: {
    height: 55,
    backgroundColor: colors.primary,
    width: "100%",
  },
});

export default Footer;
