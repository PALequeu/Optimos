import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import HeaderComponent from "../assets/components/header";
import TitleComponent from "../assets/components/Title";

function FirstSimulatorScreen({ navigation }) {
  const navigationWatcher = useNavigation();

  const SimulatorHandler = () => {
    navigation.navigate("SimulateurScreen");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent navigation={navigationWatcher} title="SIMULATEUR" />
      <View style={{ width: "90%", top: 10 }}>
        <Text style={{ fontSize: 25, textAlign: "center" }}>
          choisissez si vous voulez lancer une nouvelle simulation ou avoir
          accès à une ancienne simulation
        </Text>
      </View>
      <TouchableOpacity style={styles.cases} onPress={SimulatorHandler}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          nouvelle simulation
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cases}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          Historique des simulations
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },

  cases: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    top: 90,
    borderRadius: 15,
    backgroundColor: "rgba(30,200,00,0.8)",
    width: "80%",
    height: "17%",
  },

  FichesText: {
    fontSize: 40,
  },

  HistoriqueText: {
    fontSize: 25,
  },

  HistEtRess: {
    width: "80%",
    height: "10%",
    flexDirection: "row",

    justifyContent: "space-between",
    marginBottom: 10,
  },
  SimulatorText: {
    fontSize: 60,
  },
  tinyLogo: {
    width: 120,
    height: 80,
  },
});
export default FirstSimulatorScreen;
