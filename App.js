import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Header, Divider } from "react-native-elements";

function test() {
  console.log("test");
}
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Divider />
        <Button title="test"></Button>
      </View>
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
