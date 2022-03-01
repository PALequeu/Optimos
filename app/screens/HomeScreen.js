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
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import HeaderComponent from "../assets/components/header";
import TitleComponent from "../assets/components/Title";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  const navigationRouter = useNavigation();

  const SimulatorHandler = () => {
    navigation.navigate("SimulateurScreen");
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
        title="OPTIMOS"
        navigation={navigationRouter}
        backButtonIsShown={false}
      />
      <TouchableOpacity
        style={[styles.cases, { width: "80%", height: "20%" }]}
        onPress={SimulatorHandler}
      >
        <Text style={styles.SimulatorText}>Simulateur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.cases, { width: "80%", height: "15%" }]}>
        <Text style={styles.FichesText}>Fiches Pratiques</Text>
      </TouchableOpacity>
      <View style={styles.HistEtRess}>
        <TouchableOpacity
          style={[styles.cases, { width: "48%", height: "100%" }]}
        >
          <Text style={styles.HistoriqueText}>Historique</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cases, { width: "48%", height: "100%" }]}
        >
          <Text style={styles.HistoriqueText}>Ressources</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.cases, { width: "80%", height: "7%" }]}
        onPress={ContactsHandler}
      >
        <Text style={styles.FichesText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.cases, { width: "80%", height: "7%" }]}>
        <Text style={styles.FichesText}>Fun Facts</Text>
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
    top: 50,
    borderRadius: 15,
    backgroundColor: "rgba(30,200,00,0.8)",
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
  LogoContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: 20,
  },
});
export default HomeScreen;
