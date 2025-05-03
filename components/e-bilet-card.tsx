import React from "react";
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
        <View style={[styles.notchLeft, {backgroundColor: circleColor }]} />
        <View style={styles.dashedLine} />
        <View style={[styles.notchRight, {backgroundColor: circleColor }]} />
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
    height: 40, // enough space for notches
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  dashedLine: {
    width: "100%",
    height: 1, // height becomes the line thickness
    backgroundImage: "repeating-linear-gradient(to right, #6C78E6 0 8px, transparent 10px 16px)",
    backgroundColor: "transparent",
    position: "absolute",
    top: "50%",
  },
  notchLeft: {
    position: "absolute",
    left: -35,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "",
  },
  notchRight: {
    position: "absolute",
    right: -35,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
