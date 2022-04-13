import TitleComponent from "../assets/components/Title";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Test() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <View>
        <TitleComponent title="OPTIMOS" navigation={navigation} />
      </View>
      <TouchableOpacity
        style={[styles.cases, { width: "80%", height: "20%" }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.SimulatorText}>Simulateur</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Test;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  cases: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    top: 50,
    borderRadius: 15,
    backgroundColor: "rgba(30,200,00,0.8)",
  },
  SimulatorText: {
    fontSize: 60,
  },
});
