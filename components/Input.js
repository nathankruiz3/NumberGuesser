import React from "react";
import { TextInput } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={props.style} />;
};

export default Input;
