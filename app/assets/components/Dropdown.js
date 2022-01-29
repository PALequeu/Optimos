import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";

function Dropdown(props) {
  const [ShouldShow, setShouldShow] = useState(false);

  return (
    <View style={{ paddingBottom: 15 }}>
      <TouchableOpacity
        style={
          props.done
            ? [
                styles.TitleContainer,
                { backgroundColor: "rgba(200,200,100,1)" },
              ]
            : [styles.TitleContainer, { backgroundColor: "rgba(30,200,00,1)" }]
        }
        onPress={() => setShouldShow(!ShouldShow)}
      >
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
        <Text style={{ fontSize: 20 }}>{ShouldShow ? "▼" : "▶"}</Text>
      </TouchableOpacity>
      {ShouldShow ? <View style={styles.cases}>{props.children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  TitleContainer: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    zIndex: 2,
  },
  cases: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(100,100,50,0.7)",
    width: "100%",
    bottom: 10,
    paddingTop: 10,
  },
});

export default Dropdown;
