import { View, Text, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/images";
import { router } from "expo-router";

export default function RootScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="fw-bold text-3xl">Hello</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#ca5950" style="light"/>
    </SafeAreaView>
  );
}
