import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

const TABS = [
  { name: "index", label: "Home", icon: "home-outline", color: "#4a64d1" },
  {
    name: "aktualnosci",
    label: "Aktualności",
    icon: "file-document-outline",
    color: "#e91e63",
  },
  {
    name: "e-bilet",
    label: "E-bilet",
    icon: "ticket-outline",
    color: "#ff9800",
  },
  {
    name: "profile",
    label: "Profil",
    icon: "account-outline",
    color: "#4caf50",
  },
];

// Helper to recursively find the deepest active route name
const getFocusedRouteName = (route: any): string => {
  if (!route?.state || !route.state.routes) return route.name;
  const nestedRoute = route.state.routes[route.state.index || 0];
  return getFocusedRouteName(nestedRoute);
};

const MyTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const tabWidth = (width - 32) / TABS.length;
  const barWidth = 50;

  // Get the deeply focused route
  const currentRoute = navigation.getState().routes[state.index];
  const focusedRouteName = getFocusedRouteName(currentRoute);

  const currentTabIndex = TABS.findIndex((tab) => tab.name === focusedRouteName);
  const activeColor = TABS[currentTabIndex]?.color || "#000";

  useEffect(() => {
    if (currentTabIndex !== -1) {
      Animated.spring(translateX, {
        toValue: tabWidth * currentTabIndex + (tabWidth - barWidth) / 2,
        useNativeDriver: true,
      }).start();
    }
  }, [currentTabIndex, tabWidth]);

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              width: barWidth,
              backgroundColor: activeColor,
              transform: [{ translateX }],
              shadowColor: activeColor,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.7,
              shadowRadius: 6,
              elevation: 6,
            },
          ]}
        />
        {state.routes
          .filter((route) => TABS.some((tab) => tab.name === route.name))
          .map((route, index) => {
            const tabConfig = TABS.find((tab) => tab.name === route.name);
            const isFocused = route.name === focusedRouteName;

            const onPress = () => {
              if (!isFocused) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.tabButton}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={tabConfig?.label}
              >
                <Icon
                  name={tabConfig?.icon || "circle"}
                  size={24}
                  color={"#6F6F6F"}
                />
                <Text style={styles.tabText}>{tabConfig?.label}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 30,
    left: 16,
    right: 16,
  },
  tabBar: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 6,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    overflow: "hidden",
    shadowColor: "#4a64d1",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6F6F6F",
    paddingTop: 5,
  },
  activeIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 3,
  },
});

export default MyTabBar;
