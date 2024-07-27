import React from 'react';
import { StyleSheet, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";;

// Convert TypeScript interface to JavaScript props destructuring
export default function Input({
  id,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  value
}) {
  return (
    <TextInput
      style={styles.field}
      id={id}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: "#0845711C",
    width: wp("85%"),
    height: 48,
    paddingLeft: 20,
    borderRadius: 3,
    color: "#084571",
    fontWeight: "bold",
  },
});
