import React, { useState } from "react";
import {
  Dimensions,
  StatusBar,
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  TextInput,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
//import { auth } from "../../firebase";
import HeaderComponent from "../assets/components/header";

function WelcomeScreen({ navigation }) {
  const [Email, setEmail] = useState(0);
  const [Password, setPw] = useState("");

  /* const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.use;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };
 */
  const LoginHandler = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <HeaderComponent title="OPTI-MOS" />

      <View style={styles.IdContainer} KeyboardAvoidingView>
        <TextInput
          style={styles.Input}
          placeholder="Email"
          onChangeText={(text) => setId(text)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Mot De Passe"
          onChangeText={(pw) => setPw(pw)}
          secureTextEntry
        />
      </View>
      <TouchableHighlight
        style={styles.LoginButton}
        title="connectez-vous"
        onPress={LoginHandler}
      >
        <Text style={styles.ButtonText}>CONNECTEZ VOUS</Text>
      </TouchableHighlight>
      <View style={{}}>
        <TouchableHighlight
          style={[styles.LoginButton, {}]}
          title="Créer un compte"
          onPress={LoginHandler}
        >
          <Text style={styles.NewUserButton}>Creer un compte</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 12,
  },
  IdContainer: {
    backgroundColor: "rgba(0,200,00,0.7)",
    width: "80%",
    height: 120,
    position: "absolute",
    bottom: "35%",
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
    position: "relative",
    height: 40,
    width: 120,
    top: "45%",
    borderRadius: 10,
    backgroundColor: "rgba(30,200,00,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  LogoContainer: {
    flexDirection: "row",
    width: "100%",
    height: 10,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  NameContainer: {
    backgroundColor: "rgba(30,200,00,0.7)",
    width: "100%",
    height: 100,
    top: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  NameText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 70,
  },
  tinyLogo: {
    width: 120,
    height: 80,
  },
  NewUserButton: {
    height: 40,
    width: 120,
    top: "45%",
    borderRadius: 10,
    backgroundColor: "rgba(30,200,00,0.7)",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
});

export default WelcomeScreen;
