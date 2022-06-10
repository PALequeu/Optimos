import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import TitleComponent from "../assets/components/Title";
import { useNavigation } from "@react-navigation/native";
//import firebase from "firebase/app";
//import "@firebase/auth";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { authentication } from "../assets/components/config";

export default function CreateAccountScreen() {
  const navigationRouter = useNavigation();
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState(0);
  const [NumAdher, setNumAdher] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Password, setPw] = useState("");
  const [ConfirmPassword, setConfirmPw] = useState("");

  function signUp() {
    console.log(Email, Password);

    auth
      .createUserWithEmailAndPassword(authentication, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // your code

        alert("Successfully sign up!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  const backToLoginScreen = () => {
    navigationRouter.goBack();
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent
        title="Créer un compte"
        navigation={navigationRouter}
        backButtonIsShown={false}
      />
      <TextInput
        style={styles.Input}
        placeholder="Nom"
        onChangeText={(pw) => setNom(pw)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Prénom"
        onChangeText={(pw) => setPrenom(pw)}
      />
      <TextInput
        style={styles.Input}
        placeholder="E-mail"
        onChangeText={(pw) => setEmail(pw)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Numéro adhérent LORCA"
        onChangeText={(pw) => setNumAdher(pw)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Téléphone"
        onChangeText={(pw) => setTelephone(pw)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Mot de passe"
        onChangeText={(pw) => setPw(pw)}
        secureTextEntry
      />
      <TextInput
        style={styles.Input}
        placeholder="Confirmer le mot de passe"
        onChangeText={(pw) => setConfirmPw(pw)}
        secureTextEntry
      />
      {ConfirmPassword != Password ? (
        <Text style={styles.Warningtext}>
          les mots de passe ne sont pas identiques !
        </Text>
      ) : null}
      <TouchableHighlight style={styles.LoginButton} onPress={signUp}>
        <Text>Créer un compte !</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.LoginButton}
        onPress={backToLoginScreen}
      >
        <Text>J'ai déjà un compte</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
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
    width: 150,
    borderRadius: 10,
    backgroundColor: "rgba(188, 212, 134, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    margin: 10,
  },
  Warningtext: {
    color: "red",
    fontSize: 10,
    bottom: 5,
  },
});
