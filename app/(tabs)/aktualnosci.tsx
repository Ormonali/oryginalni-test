import { Footer } from "@/components/Footer";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
};

type SectionData = {
  title: string;
  data: NotificationItem[];
};

const notifications: SectionData[] = [
  {
    title: "Nowe",
    data: [
      {
        id: "1",
        title: "Zmiana statusu zaproszenia dla gości",
        message:
          "Katarzyna Sułkowska potwierdziła Twoje zaproszenie jako „Gość VIP”",
        time: "7 godz. temu",
        icon: "email-check-outline",
      },
      {
        id: "2",
        title: "Portal dokumentów",
        message: "Pojawiły się nowe dokumenty do akceptacji.",
        time: "7 godz. temu",
        icon: "file-document-outline",
      },
      {
        id: "3",
        title: "Zmiany organizacyjne",
        message: "Uwaga zmiana godzin funkcjonowania biura targowego",
        time: "7 godz. temu",
        icon: "calendar-clock",
      },
    ],
  },
  {
    title: "Wcześniejsze powiadomienia",
    data: [
      {
        id: "4",
        title: "Aktualności",
        message: "Nowe wydarzenie dodane w agendzie targów",
        time: "7 godz. temu",
        icon: "bell-outline",
      },
      {
        id: "5",
        title: "Materiały marketingowe",
        message: "Dodano nowe materiały promocyjne",
        time: "7 godz. temu",
        icon: "folder-outline",
      },
    ],
  },
];

export default function AktualnosciScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Aktualności</Text>

        {notifications.map((section) => (
          <View key={section.title} style={{ width: "100%" }}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.data.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.card,
                  {
                    opacity:
                      section.title === "Wcześniejsze powiadomienia" ? 0.4 : 1,
                  },
                ]}
              >
                <View style={styles.row}>
                  <View style={styles.iconWrap}>
                    <Icon name={item.icon} size={24} color="#6b6b6b" />
                  </View>
                  <View style={styles.textWrap}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Your footer here */}
        <View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconWrap: {
    width: 40,
    marginRight: 12,
    marginTop: 2,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 4,
    color: "#111",
  },
  message: {
    fontSize: 13,
    color: "#444",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
  scrollContent: {
    width: "90%",
    alignItems: "center",
    paddingBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 90,
  },
  footer: {
    marginTop: 40,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    width: "100%",
  },
});
