import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Reac, { useEffect, useState } from "react";
import TitleComponent from "../assets/components/Title";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "react-native-elements/dist/config";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function ChooseParcelScreen({ navigation }) {
  const navigationWatcher = useNavigation();

  const SimulatorHandler = () => {
    navigation.navigate("SimulatorScreen");
  };

  const [Parcels, UpdateParcels] = useState([]);
  const [Counter, AddCounter] = useState(1);
  const [ParcelName, UpdateParcelName] = useState(Counter);
  const [PopUpView, SetPopUpView] = useState(false);

  const AddParcel = () => {
    AddCounter(Counter + 1);
    SetPopUpView(false);
    const arr = [...Parcels];
    arr.push(
      <TouchableOpacity
        style={styles.cases}
        key={Counter}
        onPress={SimulatorHandler}
      >
        <Text style={styles.TextColor}>{ParcelName}</Text>
      </TouchableOpacity>
    );

    UpdateParcels(arr);
  };

  const PopUpHandler = () => {
    SetPopUpView(true);
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent title={"SIMULATEUR"} navigation={navigationWatcher} />
      <Text style={styles.InfoText}>
        {"\n"}
        Choississez la parcelle sur laquelle vous comptez réaliser la simulation
      </Text>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.ScrollContainer}
      >
        {Parcels}
        <TouchableOpacity
          style={[styles.cases, { width: "60%" }]}
          onPress={PopUpHandler}
        >
          <Text style={styles.TextColor}>Nouvelle Parcelle</Text>
        </TouchableOpacity>
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
      {PopUpView ? (
        <View style={styles.AddParcelView}>
          <Text style={[{ fontSize: 25 }, styles.TextColor]}>
            Créer une nouvelle parcelle {"\n"}
          </Text>
          <Text style={styles.TextColor}>Nom de la parcelle</Text>
          <TextInput
            style={styles.Input}
            placeholder="Parcelle"
            onChangeText={(text) => UpdateParcelName(text)}
          ></TextInput>
          <TouchableOpacity
            style={[styles.cases, { width: "60%" }]}
            onPress={AddParcel}
          >
            <Text style={styles.TextColor}>Créer la parcelle</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
  cases: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    top: 20,
    borderRadius: 15,
    backgroundColor: "#4b6825",
    borderWidth: 3,
    borderColor: "#c9c8aa",
    height: 50,
    width: "100%",
  },
  InfoText: {
    textAlign: "center",
    paddingBottom: 30,
    fontSize: 17,
  },
  Input: {
    height: 30,
    margin: 5,
    borderWidth: 2,
    padding: 5,
    width: "90%",
  },
  ScrollContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  AddParcelView: {
    top: "25%",
    position: "absolute",
    width: "80%",
    backgroundColor: "#4b6825",
    flex: 1,
    borderWidth: 3,
    borderColor: "#c9c8aa",
    alignItems: "center",
    borderRadius: 10,
  },
  WhiteBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    alignItems: "center",
  },
  TextColor: {
    color: "#c9c8aa",
  },
});
