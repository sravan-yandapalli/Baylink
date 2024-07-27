import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Convert TypeScript interface to JavaScript props destructuring
export default function Button({ name, type, press }) {
  return (
    <TouchableOpacity
      style={type === "DARK" ? styles.Btn1 : styles.Btn2}
      onPress={() => press()}
    >
      <Text style={type === "DARK" ? styles.BtnText1 : styles.BtnText2}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Btn1: {
    backgroundColor: "#084571",
    width: wp("85%"),
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  BtnText1: {
    color: '#FFFFFF',
    fontWeight: "bold",
  },

  Btn2: {
    backgroundColor: "#08457154",
    width: 228,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  BtnText2: {
    color: '#084571',
    fontWeight: "bold",
  },
});
