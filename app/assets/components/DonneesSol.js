import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { CheckBox } from "react-native-elements";

function Checklist(props) {
  const listItems = () =>
    props.data.map((element) => {
      return (
        <View
          key={element.id}
          style={{ left: 10, flex: 1, flexDirection: "row" }}
        >
          <Text style={{ fontSize: 20 }}>{element.question}</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => element.changeValue(text)}
            value={element.value}
            placeholder="0"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 20 }}> {element.unit}</Text>
          {/* <Button title="test" onPress={() => console.log(element.value)} /> */}
        </View>
      );
    });

  return <View style={styles.cases}>{listItems()}</View>;
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

export default Checklist;
