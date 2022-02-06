import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import k from ".../config/firebase.js";
//import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

//const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [Email, setEmail] = useState(0);
  const [Password, setPw] = useState("");

  const CreateAccountHandler = () => {
    navigation.navigate("CreateAccountScreen");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <View style={styles.TextContainer}>
        <Text>bienvenue sur</Text>
        <Text style={styles.Title}>OPTIMOS</Text>
      </View>

      <View style={styles.IdContainer}>
        <TextInput
          style={styles.Input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Mot De Passe"
          onChangeText={(pw) => setPw(pw)}
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableHighlight style={styles.LoginButton}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ top: 70 }}>
          <Text>mot de passe oublié</Text>
        </TouchableHighlight>
      </View>
      <View style={{ top: "25%" }}>
        <TouchableHighlight onPress={CreateAccountHandler}>
          <Text>Nouveau ? Créer un compte !</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    flexDirection: "column",
  },
  IdContainer: {
    backgroundColor: "rgba(0,200,00,0.7)",
    width: "80%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Input: {
    height: 30,
    margin: 5,
    borderWidth: 2,
    padding: 5,
    width: "80%",
  },
  LoginButton: {
    height: 40,
    width: 120,
    borderRadius: 10,
    backgroundColor: "rgba(30,200,00,0.7)",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  TextContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
  Title: {
    fontSize: 70,
  },
});
