import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import TitleComponent from "../assets/components/Title";
import { useNavigation } from "@react-navigation/native";
import Dropdown from "../assets/components/Dropdown";

export default function AdvicesScreen({ navigation }) {
  const navigationWatcher = useNavigation();

  const BackHandler = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.Background}
      source={require("../assets/fond_ble2.jpeg")}
    >
      <TitleComponent
        title="CONSEILS"
        navigation={navigationWatcher}
        backButtonIsShown={false}
      />
      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.InfoText}>
          D'après notre OAD, voici nos conseils pour améliorer la fertilité de
          vos sols.
        </Text>
        <Dropdown title="Afficher vos conseils">
          <Text style={styles.TextStyle}>
            • Optimisez vos cultures intermédiaires avec une prairie temporaire
            composée de ray-grass et trèfle. {"\n"}
          </Text>
          <Text style={styles.TextStyle}>
            • Réduisez votre fréquence de labour si possible, en ayant notamment
            recours à des méthodes de désherbage alternatives. Ce conseil est à
            adapter à votre contexte pédoclimatique. {"\n"}
          </Text>
          <Text style={styles.TextStyle}>
            • Diversifiez et allongez votre rotation culturale. Les céréales
            assurent un apport important de MO dans les sols, mais d’autres
            cultures peuvent être implantées, pour la réduction de la pression
            des ravageurs par exemple. {"\n"}
          </Text>
          <Text style={styles.TextStyle}>
            • Poursuivez votre apport d’amendement organique actuel. {"\n"}
          </Text>
          <Text style={styles.TextStyle}>
            • Si votre sol est limoneux ou limoneux-argileux, vérifiez
            régulièrement le pH afin qu’il se situe entre 6,5 et 7, et chaulez
            si ce dernier est trop acide pour vos cultures. Le chaulage doit
            idéalement s’effectuer de façon régulière, après la récolte de
            préférence ou avant la reprise de végétation. Contactez votre
            technicien pour échanger sur les solutions et les offres du moment.{" "}
            {"\n"}
          </Text>
        </Dropdown>

        <Text style={styles.InfoText}>
          Si vous le souhaitez, vous pouvez enregistrer cette simulation. Vous
          la retrouverez alors dans l'onglet "Historique des simulations".{" "}
        </Text>
        <TouchableHighlight
          style={styles.SimulatorButton}
          title="connectez-vous"
          onPress={() => console.log("ok")}
        >
          <Text style={styles.ButtonText}>ENREGISTRER LA SIMULATION</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.SimulatorButton, { top: 10 }]}
          title="connectez-vous"
          onPress={() => console.log("ok")}
        >
          <Text style={styles.ButtonText} onPress={BackHandler}>
            RETOUR AU MENU PRINCIPAL
          </Text>
        </TouchableHighlight>
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: "center",
  },
  ScrollContainer: {
    width: "100%",

    padding: 10,
  },
  TextStyle: {
    color: "white",
    fontSize: 20,
    paddingLeft: 5,
  },
  InfoText: {
    textAlign: "center",
    paddingBottom: 30,
    fontSize: 17,
  },
  SimulatorButton: {
    height: 30,
    width: "80%",
    left: "12%",
    borderRadius: 10,
    backgroundColor: "#a9c26f",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 16,
  },
});
