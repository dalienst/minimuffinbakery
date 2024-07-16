import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import backImage from "../assets/images/bread.jpg";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.5)"]}
          style={styles.gradient}
        />
        <SafeAreaView style={styles.main}>
          <View style={styles.spacer} />
          <View style={styles.card}>
            <Text style={styles.title}>Mini Muffin Bakery</Text>
            <Text style={styles.subtitle}>
              The Cradle of Cake. Explore through a curations of delicious
              recipes.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push("/(tabs)")
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
    justifyContent: "flex-end",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  spacer: {
    flex: 1,
  },
  card: {
    width: width - 40,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
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
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
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
