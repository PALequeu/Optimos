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
        title="Opti-MOS"
        navigation={navigationRouter}
        backButtonIsShown={false}
      />

      <Text style={{ fontSize: 20, lineHeight: 30, textAlign: "center" }}>
        Un OAD pour une meilleure gestion de la fertilité des sols lorrains
      </Text>
      <TouchableOpacity
        style={[
          styles.cases,
          {
            backgroundColor: "#384623",
            width: "85%",
            height: "15%",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}
        onPress={SimulatorHandler}
      >
        <Text style={styles.FichesText}>Nouvelle simulation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.cases,
          {
            backgroundColor: "#4b6825",
            width: "85%",
            height: "15%",
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          },
        ]}
      >
        <Text style={styles.FichesText}>Historique des simulations</Text>
      </TouchableOpacity>
      <View style={styles.HistEtRess}>
        <TouchableOpacity
          style={[
            styles.cases,
            {
              backgroundColor: "rgba(188, 212, 134, 1)",
              width: "49%",
              height: "100%",
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            },
          ]}
        >
          <Text style={styles.HistoriqueText}>Fiches pratiques</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cases,
            {
              backgroundColor: "rgba(188, 212, 134, 1)",
              width: "49%",
              height: "100%",
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            },
          ]}
        >
          <Text style={styles.HistoriqueText}>Ressources</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.cases,
          { backgroundColor: "#2b3916", width: "85%", height: "7%" },
        ]}
        onPress={ContactsHandler}
      >
        <Text style={styles.FichesText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.cases,
          {
            backgroundColor: "#c9c8aa",
            width: "85%",
            height: "7%",
            borderColor: "#2b3916",
          },
        ]}
      >
        <Text style={[styles.FichesText, { color: "#2b3916" }]}>Fun Facts</Text>
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
    top: 20,
    borderRadius: 15,
    backgroundColor: "rgba(30,200,00,0.8)",
    borderWidth: 3,
    borderColor: "#c9c8aa",
  },

  FichesText: {
    fontSize: 40,
    textAlign: "center",
    color: "#c9c8aa",
  },

  HistoriqueText: {
    fontSize: 28,
    textAlign: "center",
    color: "#2b3916",
  },

  HistEtRess: {
    width: "85%",
    height: "10%",
    flexDirection: "row",

    justifyContent: "space-between",
    marginVertical: 50,
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
