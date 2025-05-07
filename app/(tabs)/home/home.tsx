// home.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMain from "./home-main"; // main content of home
import HomeDetail from "./zaplanowana-wydarzenia"; // a detail screen

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="HomeMain" component={HomeMain} options={{ title: "Home" }} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} options={{ title: "Details" }} />
    </Stack.Navigator>
  );
}
