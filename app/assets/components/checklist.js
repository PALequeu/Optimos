import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CheckBox } from "react-native-elements";

function Checklist(props) {
  const done = true;

  const listItems = () =>
    props.data.map((element) => {
      return (
        <View
          key={element.id}
          style={{
            flex: 1,
            flexDirection: "row",
            right: 10,
          }}
        >
          <CheckBox
            checked={element.checked}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={element.changeChecked}
          />
          <Text style={{ fontSize: 19, top: 13, right: 18 }} numberOfLines={2}>
            {element.question}
          </Text>
        </View>
      );
    });

  return <View style={styles.cases}>{listItems()}</View>;
}

const styles = StyleSheet.create({});

export default Checklist;
