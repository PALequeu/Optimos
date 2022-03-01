import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";

import { useState } from "react/cjs/react.development";
import { useNavigation } from "@react-navigation/native";

import Dropdown from "../assets/components/Dropdown";
import Checklist from "../assets/components/checklist";
import HeaderComponent from "../assets/components/header";
import Input from "../assets/components/Input";
import FrequencyInput from "../assets/components/FrequencyInput";
import DonneesSol from "../assets/components/DonneesSol";
import TitleComponent from "../assets/components/Title";

function SimulatorScreen(props) {
  const [Cereales, setCereales] = useState(false);
  const [Eleveur, setEleveur] = useState(false);
  const [CV, setCV] = useState(false);
  const [AB, setAB] = useState(false);
  const [ACS, setACS] = useState(false);
  const [Prairies, setPrairies] = useState(false);
  const [CulturePrint, setCulturePrint] = useState(false);
  const [Legumineuse, setLegumineuse] = useState(false);
  const [AmendOrg, setAmendOrg] = useState(false);
  const [Engrais, setEngrais] = useState(false);
  const [Chaulage, setChaulage] = useState(false);
  const [LongueurRot, setLongueurRot] = useState(0);
  const [Labour, setLabour] = useState(0);
  const [CulturesInter, setCulturesInter] = useState(0);
  const [RestitPaille, setRestitPaille] = useState(0);
  const [ArgileVraie, setArgileVraie] = useState(0);
  const [CACO3, setCACO3] = useState(0);
  const [Corg, setCorg] = useState(0);
  const [PH, setPH] = useState(0);
  const [Cailloux, setCailloux] = useState(0);

  const navigationWatcher = useNavigation();

  const questionsTypeExploit = [
    {
      id: 1,
      question: "Céréalier",
      checked: Cereales,
      changeChecked: () => {
        setCereales(!Cereales);
        setEleveur(false);
      },
    },
    {
      id: 2,
      question: "Polyculture-élevage",
      checked: Eleveur,
      changeChecked: () => {
        setEleveur(!Eleveur);
        setCereales(false);
      },
    },
  ];

  const questionsSyst = [
    {
      id: 1,
      question: "Conventionnelle",
      checked: CV,
      changeChecked: () => {
        setCV(!CV);
        setAB(false);
        setACS(false);
      },
    },
    {
      id: 2,
      question: "Agriculture Biologique",
      checked: AB,
      changeChecked: () => {
        setAB(!AB), setCV(false), setACS(false);
      },
    },
    {
      id: 3,
      question: "ACS ou TCS",
      checked: ACS,
      changeChecked: () => {
        setACS(!ACS), setCV(false), setAB(false);
      },
    },
  ];

  const questionsPresences = [
    {
      id: 1,
      question: "Présence de prairies",
      checked: Prairies,
      changeChecked: () => setPrairies(!Prairies),
    },
    {
      id: 2,
      question: "Présence de cultures de printemps",
      checked: CulturePrint,
      changeChecked: () => setCulturePrint(!CulturePrint),
    },
    {
      id: 3,
      question: "Présence de légumineuses",
      checked: Legumineuse,
      changeChecked: () => setLegumineuse(!Legumineuse),
    },
  ];

  const questionsPratiqueCult = [
    {
      id: 1,
      question: "Amendement Organique",
      checked: AmendOrg,
      changeChecked: () => setAmendOrg(!AmendOrg),
    },
    {
      id: 2,
      question: "Engrais azotés et organiques",
      checked: Engrais,
      changeChecked: () => setEngrais(!Engrais),
    },
    {
      id: 3,
      question: "Chaulage",
      checked: Chaulage,
      changeChecked: () => setChaulage(!Chaulage),
    },
  ];

  const questionsDonneeSol = [
    {
      id: 1,
      question: "argile : ",
      value: ArgileVraie,
      changeValue: setArgileVraie,
      unit: "g/kg",
    },
    {
      id: 2,
      question: "carbonate de calcium : ",
      value: CACO3,
      changeValue: setCACO3,
      unit: "g/kg",
    },
    {
      id: 3,
      question: "carbone organique : ",
      value: Corg,
      changeValue: setCorg,
      unit: "g/kg",
    },
    {
      id: 4,
      question: "pH : ",
      value: PH,
      changeValue: setPH,
      unit: "",
    },
    {
      id: 5,
      question: "cailloux en volume : ",
      value: Cailloux,
      changeValue: setCailloux,
      unit: "%",
    },
  ];

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent navigation={navigationWatcher} title={"SIMULATEUR"} />

      <ScrollView style={styles.ScrollContainer}>
        <Dropdown title="Type d'exploitation">
          <Checklist data={questionsTypeExploit} />
        </Dropdown>

        <Dropdown title="Type d'agriculture">
          <Checklist data={questionsSyst} />
        </Dropdown>

        <Dropdown title="Pratiques culturales">
          <Checklist data={questionsPresences} />
        </Dropdown>

        <Dropdown title="Amendements et engrais ">
          <Checklist data={questionsPratiqueCult} />
        </Dropdown>

        <Dropdown title="Rotations">
          <Input Value={LongueurRot} ChangeValue={setLongueurRot} />
        </Dropdown>

        <Dropdown title="Fréquence de labour">
          <FrequencyInput Value={Labour} ChangeValue={setLabour} />
        </Dropdown>

        <Dropdown title="Culture intermédiaire">
          <FrequencyInput
            Value={CulturesInter}
            ChangeValue={setCulturesInter}
          />
        </Dropdown>

        <Dropdown title="Réstitution des pailles">
          <FrequencyInput Value={RestitPaille} ChangeValue={setRestitPaille} />
        </Dropdown>

        <Dropdown title="Données et composition du sol">
          <DonneesSol data={questionsDonneeSol} />
        </Dropdown>

        <TouchableHighlight
          style={styles.SimulatorButton}
          title="connectez-vous"
        >
          <Text style={styles.ButtonText}>LANCER LA SIMULATION</Text>
        </TouchableHighlight>
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
    </ImageBackground>
  );
}

export default SimulatorScreen;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 16,
  },
  HeaderContainer: {
    flex: 1,
    width: "80%",
  },
  ScrollContainer: {
    width: "100%",
    //backgroundColor: "rgba(100,100,150,0.2)",
    top: 20,
    padding: 20,
  },
  SimulatorButton: {
    height: 30,
    width: "80%",
    left: "12%",
    borderRadius: 10,
    backgroundColor: "rgba(30,200,00,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  TestView: {
    width: "100%",
    height: 100,
    backgroundColor: "green",
    padding: 10,
    top: 40,
  },
  TitleContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(30,200,00,1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
