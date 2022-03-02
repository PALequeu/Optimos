import React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import SimulatorScreen from "./app/screens/SimulatorScreen";
import ContactsScreen from "./app/screens/ContactsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import test from "./app/screens/test";
import AdvicesScreen from "./app/screens/AdvicesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TestScreen" component={test} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="AdvicesScreen" component={AdvicesScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SimulateurScreen" component={SimulatorScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
