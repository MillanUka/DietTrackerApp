import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <br />
      <TouchableHighlight style={styles.menuButton}>
        <Text style={styles.menuButtonText}>My Diet</Text>
      </TouchableHighlight>
      <br />
      <TouchableHighlight style={styles.menuButton} onPress={() => {}}>
        <Text style={styles.menuButtonText}>Exit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    width: "200px",
    height: "100px",
    backgroundColor: "red",
  },
  menuButtonText : {
    marginTop: "20%",
    fontFamily: "Helvetica",
    fontSize: "xx-large",
    color: "white"
  }
});
