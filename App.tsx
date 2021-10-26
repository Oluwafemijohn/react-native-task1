import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputScreen from "./app/components/InputScreen";
import DisplayScreen from "./app/components/DisplayScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
const Stack = createNativeStackNavigator();

function AppNaivgation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InputScreens" component={InputScreen} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <AppNaivgation />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
