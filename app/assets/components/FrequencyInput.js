import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";

import { useState } from "react/cjs/react.development";

function FrequencyInput(props) {
  const [ParfoisChecked, setParfoisChecked] = useState(false);
  const [ToujoursChecked, setToujoursChecked] = useState(false);
  const [JamaisChecked, setJamaisChecked] = useState(false);

  const handleToujours = () => {
    setToujoursChecked(!ToujoursChecked);
    setParfoisChecked(false);
    setJamaisChecked(false);
    props.ChangeValue(1);
  };
  const handleParfois = () => {
    setToujoursChecked(false);
    setParfoisChecked(!ParfoisChecked);
    setJamaisChecked(false);
  };
  const handleJamais = () => {
    setToujoursChecked(false);
    setParfoisChecked(false);
    setJamaisChecked(!JamaisChecked);
    props.ChangeValue(0);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", right: 10 }}>
        <CheckBox
          checked={ToujoursChecked}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={handleToujours}
        />
        <Text style={styles.text}>Toujours</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", right: 10 }}>
        <CheckBox
          checked={ParfoisChecked}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={handleParfois}
        />
        <Text style={styles.text}>Parfois</Text>
        {ParfoisChecked ? (
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.input} keyboardType="numeric" />
            <Text style={[styles.text, { left: 20 }]}> fois sur </Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        ) : null}
      </View>

      <View style={{ flex: 1, flexDirection: "row", right: 10 }}>
        <CheckBox
          checked={JamaisChecked}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={handleJamais}
        />
        <Text style={styles.text}>Jamais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    top: 13,
    right: 18,
  },
  input: {
    height: 20,
    width: 30,
    borderWidth: 1,
    paddingLeft: 5,
    top: 16,
    left: 20,
  },
});
export default FrequencyInput;
