import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import TitleComponent from "../assets/components/Title";

export default function FichesScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent title="FICHES PRATIQUES" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
});
