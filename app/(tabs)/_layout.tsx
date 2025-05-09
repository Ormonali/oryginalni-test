import { Tabs } from "expo-router";
import MyTabBar from "@/components/TabBar";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="aktualnosci"
        options={{ title: "Aktualności", headerShown: false }}
      />
      <Tabs.Screen
        name="e-bilet"
        options={{ title: "E-bilet", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profil", headerShown: false }}
      />
    </Tabs>
  );
}
