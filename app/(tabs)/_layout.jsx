import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs } from "expo-router";

import Colors from "@/src/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="recipes"
        options={{
          tabBarLabel: "Recipes",
        }}
      />
    </Tabs>
  );
}
