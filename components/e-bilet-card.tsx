import React from "react";
import { View, StyleSheet } from "react-native";

type EBiletCardType = {
  upperContent: JSX.Element;
  lowerContent: JSX.Element;
};
export default function EBiletCard({
  upperContent,
  lowerContent,
}: EBiletCardType) {
  return (
    <View style={styles.card}>
      {upperContent}
      <View style={styles.dividerContainer}>
        <View style={styles.notchLeft} />
        <View style={styles.dashedLine} />
        <View style={styles.notchRight} />
      </View>
      {lowerContent}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    width: "90%",
    padding: 16,
  },
  dividerContainer: {
    width: "100%",
    height: 40, // enough space for notches
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  dashedLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#6C78E6", // dashed line color
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
    backgroundColor: "#6C78E6",
  },
  notchRight: {
    position: "absolute",
    right: -35,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6C78E6",
  },
});
