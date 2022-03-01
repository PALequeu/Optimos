import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import HeaderComponent from "../assets/components/header";
import { useNavigation } from "@react-navigation/native";
import TitleComponent from "../assets/components/Title";

export default function ContactsScreen() {
  const navigationWatcher = useNavigation();

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent title="Contacts" navigation={navigationWatcher} />
      <View style={styles.Container}>
        <Text style={styles.MainText}>LORCA</Text>
        <View style={{ alignItems: "center", top: 40 }}>
          <Text style={styles.SecondText}>mail</Text>
          <Text>maildulorca@lorca.fr {"\n"}</Text>
          <Text style={styles.SecondText}>numéro de téléphone</Text>
          <Text>06 06 06 06 06{"\n"}</Text>
          <Text style={styles.SecondText}>adresse</Text>
          <Text>lalala chemin de lalala, 54999 vers Nancy</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
  Container: {
    top: "10%",
    width: "80%",
    height: "50%",
    backgroundColor: "rgba(188, 212, 134, 1)",
    borderColor: "#c9c8aa",
    borderWidth: 20,
    alignItems: "center",
  },
  MainText: {
    fontSize: 50,
  },
  SecondText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
