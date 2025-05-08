import React, { JSX } from "react";
import { View, StyleSheet } from "react-native";

type EBiletCardType = {
  upperContent: JSX.Element;
  lowerContent: JSX.Element;
  circleColor: string;
};

export default function EBiletCard({
  upperContent,
  lowerContent,
  circleColor,
}: EBiletCardType) {
  return (
    <View style={styles.card}>
      {upperContent}
      <View style={styles.dividerContainer}>
        <View style={[styles.notchLeft, { backgroundColor: circleColor }]} />
        <View style={styles.dashRow}>
          {Array.from({ length: 15 }).map((_, index) => (
            <View key={index} style={styles.dash} />
          ))}
        </View>
        <View style={[styles.notchRight, { backgroundColor: circleColor }]} />
      </View>
      {lowerContent}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
  },
  dividerContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  dashRow: {
    flexDirection: "row",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  dash: {
    width: 10,
    height: 1,
    backgroundColor: "#6C78E6",
  },
  notchLeft: {
    position: "absolute",
    left: -35,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notchRight: {
    position: "absolute",
    right: -35,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
