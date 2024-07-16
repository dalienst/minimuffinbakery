import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import backImage from "../assets/images/bread.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImage}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.main}>
          <View style={styles.card}>
            <Text>index</Text>
            <Text>Find your dessert recipe</Text>
            <Button title="Get Started" />
          </View>
        </SafeAreaView>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  card: {
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
