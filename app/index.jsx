import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import backImage from "../assets/images/bread.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <SafeAreaView style={styles.main}>
          <View style={styles.spacer} />
          <View style={styles.card}>
            <Text style={styles.title}>Mini Muffin Bakery</Text>
            <Text style={styles.subtitle}>The Cradle of Cake. Explore through a curations of delicious recipes.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                /* Handle button press */
              }}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
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
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end", // Aligns children to the bottom
  },
  main: {
    flex: 1,
    justifyContent: "flex-end", // Aligns children to the bottom
    paddingHorizontal: 20, // Padding on the sides
    paddingBottom: 20, // Padding at the bottom
  },
  spacer: {
    flex: 1,
  },
  card: {
    width: width - 40,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#f39c12",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
