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
      <View style={styles.divider} />
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

  divider: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: 20,
  },
});
