import { Footer } from "@/components/Footer";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";
import TradeFairScreen from "../../informacje-tagowe-2";
import { Colors } from "@/constants/Colors";

export default function TradeInfoScreen() {
  const router = useRouter();
  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate("/");
    }
  };

  const scheduleData = [
    {
      label: "Montaż indywidualny",
      entries: [
        { date: "20.10.2025", time: "8:00 - 18:00" },
        { date: "21.10.2025", time: "8:00 - 20:00" },
      ],
    },
    {
      label: "Montaż PTAK EXPO",
      entries: [{ date: "21.10.2025", time: "8:00 - 20:00" }],
    },
    {
      label: "Demontaż",
      entries: [
        { date: "25.10.2025", time: "17:00 - 24:00" },
        { date: "26.10.2025", time: "8:00 - 12:00" },
      ],
    },
  ];
  return (
    <ScrollView style={styles.container} contentContainerStyle={{}}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </Pressable>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={[
            styles.headerIcon,
            {
              width: 42,
              height: 42,
              borderRadius: 22,
              borderWidth: 1,
              borderColor: "#3d3d3d",
            },
          ]}
        />
        <Text style={styles.headerText}>Informacje targowe</Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            marginBottom: 10,
            paddingVertical: 25,
            paddingHorizontal: 20,
          }}
        >
          {/* Event Title */}
          <View style={styles.eventRow}>
            <View style={{ paddingTop: 25 }}>
              <Image
                source={{ uri: "https://via.placeholder.com/60" }}
                style={[
                  styles.eventLogo,
                  { borderColor: "grey", borderWidth: 1 },
                ]}
              />
            </View>
            <View>
              <Text style={styles.eventDate}>11.03.2026 - 15.03.2026</Text>
              <Text style={styles.eventTitle}>
                International Trade Fair for Building Technologies and Materials
              </Text>
            </View>
          </View>
          {/* Hours */}
          <View style={styles.rowBlock}>
            <Text style={styles.blockTitle}>Godziny otwarcia targów:</Text>
            <View style={styles.splitRow}>
              <View style={{ flex: 1.5 }}>
                <Text style={styles.label}>Dla wystawców</Text>
                <Text style={styles.valueBlue}>08:00 - 17:00</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Dla gości</Text>
                <Text style={styles.valueBlue}>10:00 - 17:00</Text>
              </View>
            </View>
          </View>

          {/* Contacts */}
          <View style={styles.rowBlock}>
            <Text style={styles.blockTitle}>Kontakt podczas targów:</Text>
            <View style={styles.splitRow}>
              <View style={{ flex: 1.5 }}>
                <Text style={styles.label}>Obsługa Gości</Text>
                <Text style={styles.value}>+48 518 739 124</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Ochrona</Text>
                <Text style={styles.value}>+48 514 363 603</Text>
              </View>
            </View>
          </View>
          {/* Opiekun */}
          <View style={styles.rowBlock}>
            <Text style={styles.blockTitle}>Twój dedykowany opiekun:</Text>
            <View style={styles.assistantRow}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.label}>Magda Masny</Text>
                <Text style={styles.value}>+48 518 739 124</Text>
                <Text style={styles.value}>m.masny@warsawexpo.eu</Text>
              </View>
              <View style={styles.iconGroup}>
                <Icon
                  name="phone"
                  size={20}
                  color="#6C78E6"
                  style={styles.iconBtn}
                />
                <Icon
                  name="mail"
                  size={20}
                  color="#6C78E6"
                  style={styles.iconBtn}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Booth Info */}
        <View style={styles.cardBottom}>
          <View style={styles.infoRow}>
            <Text style={styles.labelBlue}>Twoje Stoisko targowe:</Text>
            <Text style={styles.valueBold}>Hala F / 3.47</Text>
          </View>

          {/* Construction Schedule */}
          <Text style={[styles.blockTitle, { marginBottom: 20 }]}>
            Zabudowa targowa:
          </Text>
          {scheduleData.map((section, index) => (
            <View key={index} style={{ marginBottom: 16 }}>
              <Text style={[styles.label, { marginBottom: 10 }]}>
                {section.label}
              </Text>
              {section.entries.map((entry, i) => (
                <Text key={i} style={[styles.value, { marginBottom: 5 }]}>
                  <Text style={styles.bold}>{entry.date}</Text>{" "}
                  <Text style={styles.blueTime}>{entry.time}</Text>
                </Text>
              ))}
            </View>
          ))}

          <View style={styles.row}>
            <Text style={styles.linkText}>Zobacz dokumenty</Text>
            <Pressable style={styles.circleButton}>
              <Text style={styles.arrow}>{"→"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <TradeFairScreen />
      <Footer imageColor="light"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    paddingTop: 5,
    marginBottom: 25,
    position: "relative",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#3d3d3d",
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
  backArrow: {
    color: "#6effd7",
    fontSize: 24,
    fontWeight: 100,
    marginTop: -4,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  eventRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  eventLogo: {
    width: 100,
    height: 50,
  },
  eventDate: {
    color: "#6C78E6",
    fontWeight: 400,
    marginBottom: 8,
    fontSize: 15,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    maxWidth: 200,
  },
  rowBlock: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 12,
    marginTop: 16,
  },
  blockTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#222",
    marginBottom: 8,
  },
  twoColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  splitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    gap: 16,
  },
  subBlock: {
    flex: 1,
  },
  label: {
    color: "#555",
    fontSize: 13,
    marginBottom: 3,
  },
  labelBlue: {
    color: "#6C78E6",
    fontWeight: "600",
    fontSize: 15,
  },
  value: {
    color: "#000",
    fontSize: 13,
  },
  valueBlue: {
    color: "#6C78E6",
    fontSize: 14,
  },
  valueBold: {
    color: "#111",
    fontWeight: "600",
    fontSize: 14,
  },
  assistantRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
  },
  iconGroup: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 12,
  },
  iconBtn: {
    backgroundColor: "#F0F0F8",
    padding: 8,
    borderRadius: 20,
  },
  cardBottom: {
    backgroundColor: "#F7F8FC",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  boothRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  boothValue: {
    color: "#111",
    fontWeight: "600",
  },
  bold: {
    fontWeight: "600",
  },
  blueTime: {
    color: "#6C78E6",
  },
  documentBtn: {
    marginTop: 20,
    backgroundColor: "#6C78E6",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  link: {
    color: "#fff",
    fontSize: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    fontSize: 13,
    textDecorationLine: "underline",
    marginRight: 15,
  },
  circleButton: {
    width: 30,
    height: 30,
    backgroundColor: "#6d83f2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    fontSize: 14,
    color: "#fff",
  },
});
