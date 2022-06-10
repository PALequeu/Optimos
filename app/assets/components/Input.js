//https://github.com/react-native-picker/picker

import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function Input(props) {
  return (
    <View style={{ flexDirection: "row", left: 7, margin: 10 }}>
      <Text style={{ fontSize: 20 }}>Durée des rotations : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => props.ChangeValue(text)}
        value={props.Value}
        placeholder="0"
        keyboardType="numeric"
      />
      {/* <Button title="test" onPress={() => console.log(props.Value)} /> */}
      <Text style={{ fontSize: 20 }}> année(s)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 30,
    borderWidth: 1,
    top: 5,
    paddingLeft: 5,
  },
});

export default Input;
