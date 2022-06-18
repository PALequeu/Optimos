import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Image,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
//import { authentication } from "../assets/components/config";

export default function LoginScreen({ navigation }) {
  //Const for signing in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const auth = getAuth();
  //Navigation handlers

  const CreateAccountHandler = () => {
    navigation.navigate("CreateAccountScreen");
  };

  const LoginHandler = () => {
    signIn();
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //your code

        console.log("Sucessfully signed in!", user.uid);
        global.IsSignedIn = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      {!isKeyboardVisible ? (
        <View style={styles.LogoContainer}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/mines_nancy.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo_lorca.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo_ensaia.png")}
          />
        </View>
      ) : null}
      <View style={styles.container}></View>
      <View style={styles.TextContainer}>
        <Text>Bienvenue sur</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.Title}>Opti-MOS</Text>
          <Text style={[styles.Title, { fontSize: 20, lineHeight: 50 }]}>
            ®
          </Text>
        </View>
      </View>

      <View style={styles.IdContainer}>
        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Mot De Passe"
          onChangeText={(pw) => setPassword(pw)}
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableHighlight style={styles.LoginButton} onPress={LoginHandler}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ top: 70 }}
          onPress={() => console.log("mdp oublié touched")}
        >
          <Text>Mot de passe oublié</Text>
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
  },
  IdContainer: {
    backgroundColor: "rgba(188, 212, 134, 0.8)",
    width: "80%",
    height: 105,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Input: {
    height: 30,
    margin: 5,
    borderWidth: 2,
    padding: 5,
    width: "90%",
  },
  LoginButton: {
    height: 40,
    width: 120,
    borderRadius: 10,
    backgroundColor: "rgba(188, 212, 134, 0.8)",
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
  LogoContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    top: "7%",
  },
  tinyLogo: {
    width: 120,
    height: 80,
  },
});
