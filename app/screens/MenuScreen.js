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

function MenuScreen({ navigation }) {
  const navigationWatcher = useNavigation();

  const SimulatorHandler = () => {
    navigation.navigate("FirstSimulatorScreen");
  };

  const ContactsHandler = () => {
    navigation.navigate("ContactsScreen");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent
        navigation={navigationWatcher}
        title="OPTIMOS"
        backButtonIsShown={false}
      />
      <View>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Bienvenue sur OPTIMOS, l'application vous permettant d'augmenter la
          quantité et la qualité de la matière organique de vos sols
        </Text>
      </View>
      <TouchableOpacity style={styles.cases} onPress={SimulatorHandler}>
        <Text style={styles.SimulatorText}>Simulateur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cases}>
        <Text style={styles.SimulatorText}>Ressources</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cases}>
        <Text style={styles.SimulatorText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cases, { top: 150, width: "90%", height: "7%" }]}
        onPress={ContactsHandler}
      >
        <Text style={styles.FichesText}>Contacts</Text>
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
    top: 30,
    borderRadius: 15,
    backgroundColor: "rgba(30,200,00,0.8)",
    width: "80%",
    height: "15%",
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
export default MenuScreen;
