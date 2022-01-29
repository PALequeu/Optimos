import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
} from "react-native";

function HeaderComponent(props) {
  return (
    <View
      style={{
        padding: 10,
        width: "110%",
        height: 190,
        flexDirection: "column",
        paddingBottom: 30,
      }}
    >
      <View style={styles.LogoContainer}>
        <Image style={styles.tinyLogo} source={require("../mines_nancy.png")} />
        <Image style={styles.tinyLogo} source={require("../logo_lorca.png")} />
        <Image style={styles.tinyLogo} source={require("../logo_ensaia.png")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,

    backgroundColor: "rgba(10,160,0,1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  LogoContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 60,
  },
  tinyLogo: {
    width: 120,
    height: 80,
  },
});
export default HeaderComponent;
