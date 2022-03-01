import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function TitleComponent({ navigation, title, backButtonIsShown = true }) {
  return (
    <View style={styles.container}>
      {backButtonIsShown ? (
        <TouchableOpacity
          style={styles.cases}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.text, { fontSize: 20, fontWeight: "bold" }]}>
            {"<"}
          </Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,

    backgroundColor: "rgba(188, 212, 134, 0.8)",
    justifyContent: "flex-end",
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
    color: "#000",
    fontSize: 50,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 120,
    height: 80,
  },
  cases: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "10%",
    right: "87%",
    bottom: "25%",
  },
});
export default TitleComponent;
