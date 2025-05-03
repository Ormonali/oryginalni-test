import EBiletCard from "@/components/e-bilet-card";
import { Footer } from "@/components/Footer";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function TicketScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={{ fontSize: 24 }}>{"←"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>E-przepustka</Text>
        </View>

        <EBiletCard
          upperContent={
            <View>
              {/* Banner image */}
              <Image
                source={{
                  uri: "https://via.placeholder.com/300x100.png?text=INDUSTRIAL+BUILDING+Expo",
                }}
                style={styles.banner}
                resizeMode="cover"
              />

              {/* Title */}
              <Text style={styles.title}>
                International Trade Fair for Building Technologies and Materials
              </Text>

              {/* Details */}
              <View style={styles.row}>
                <View style={styles.labelBlock}>
                  <Text style={styles.label}>Data</Text>
                  <Text style={styles.value}>11.03.2026 - 15.03.2026</Text>
                </View>
                <View style={styles.labelBlock}>
                  <Text style={styles.label}>Godzina</Text>
                  <Text style={styles.value}>6:00 - 23:00</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.labelBlock}>
                  <Text style={styles.label}>Typ wejściówki</Text>
                  <Text style={styles.value}>Wystawca</Text>
                </View>
                <View style={styles.labelBlock}>
                  <Text style={styles.label}>ID</Text>
                  <Text style={styles.value}>54637-22-22</Text>
                </View>
              </View>

              <View style={{ marginTop: 8 }}>
                <Text style={styles.label}>Miejsce</Text>
                <Text style={styles.value}>
                  Hala A, B, C, G, Sala VIP, Konferencje towarzyszące
                </Text>
              </View>
            </View>
          }
          lowerContent={
            <View style={styles.bottomRow}>
              <Image
                source={{ uri: "https://via.placeholder.com/80.png?text=Logo" }}
                style={styles.logo}
              />
              <View>
                <Text style={styles.qrLabel}>Twój kod wstępu</Text>
                <Image
                  source={{
                    uri: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=EXPO2026",
                  }}
                  style={styles.qr}
                />
              </View>
            </View>
          }
        />

        <View style={{ marginTop: 30, width: "80%" }}>
          <Text style={{ color: "white" }}>Kontakt podczas targow</Text>
          <View style={[styles.row, { marginTop: 10 }]}>
            <View style={styles.labelBlock}>
              <Text>Obsluga Gosci</Text>
              <Text
                style={[
                  styles.value,
                  {
                    color: "white",
                    marginTop: 8,
                    fontWeight: 100,
                    fontSize: 12,
                  },
                ]}
              >
                +48 779 883 761
              </Text>
            </View>
            <View style={styles.labelBlock}>
              <Text>Ochrona</Text>
              <Text
                style={[
                  styles.value,
                  {
                    color: "white",
                    marginTop: 8,
                    fontWeight: 100,
                    fontSize: 12,
                  },
                ]}
              >
                +48 776 772 435
              </Text>
            </View>
          </View>
        </View>
        <Footer colorMode="dark"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C78E6",
    alignItems: "center",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    marginRight: 8,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    width: "90%",
    padding: 16,
  },
  banner: {
    height: 100,
    width: "100%",
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
    color: "#222",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  labelBlock: {
    width: "48%",
  },
  label: {
    color: "#6C78E6",
    fontWeight: "600",
    fontSize: 13,
  },
  value: {
    fontSize: 13,
    color: "#333",
    marginTop: 2,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  qr: {
    width: 100,
    height: 100,
    marginTop: 4,
  },
  qrLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
