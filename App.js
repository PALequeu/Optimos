import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import SimulatorScreen from "./app/screens/SimulatorScreen";
import ContactsScreen from "./app/screens/ContactsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import AdvicesScreen from "./app/screens/AdvicesScreen";
import ChooseParcelScreen from "./app/screens/ChooseParcelScreen";
import HistoricScreen from "./app/screens/HistoricScreen";
import FichesScreen from "./app/screens/FichesScreen";

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4RGK8hWIDN93VDFPi0vAX1sk-SUgREWs",
  authDomain: "bddoptimos.firebaseapp.com",
  projectId: "bddoptimos",
  storageBucket: "bddoptimos.appspot.com",
  messagingSenderId: "68022704335",
  appId: "1:68022704335:web:0389644cf25e893ae0ffba",
};

var app = null;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

import { getFirestore } from "firebase/firestore";
global.db = getFirestore(initializeApp(firebaseConfig));

const Stack = createStackNavigator();

export default function App() {
  const auth = getAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {auth.currentUser && (
          <>
            <Stack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
            />
            <Stack.Screen name="AdvicesScreen" component={AdvicesScreen} />

            <Stack.Screen name="SimulatorScreen" component={SimulatorScreen} />
            <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
            <Stack.Screen name="HistoricScreen" component={HistoricScreen} />
            <Stack.Screen name="FichesScreen" component={FichesScreen} />
            <Stack.Screen
              name="ChooseParcelScreen"
              component={ChooseParcelScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
