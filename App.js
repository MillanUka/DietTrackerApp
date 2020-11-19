import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Header } from "react-native-elements";
import Menu from "./src/components/Menu";

export default function App() {
  return (
    <View>
      <Header
        backgroundColor={""}
        leftComponent={<Button icon={"menu"} color={"#fff"} />}
        centerComponent={{ text: "Diet Tracker", style: { color: "#fff" } }}
        rightComponent={<Button icon={"home"} color={"#fff"} onPress={() => {
          console.log("home");
        }} />}
      />
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "justify",
    padding : "1%",
    fontFamily : "Helvetica"
  }
});
