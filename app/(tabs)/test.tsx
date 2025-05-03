import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

const events = [
  { time: "09:00-17:00", hall: "Hala D", title: "ArchiDay" },
  {
    time: "11:00-15:00",
    hall: "Hala F",
    title: "II Konferencja o Home Stagingu",
  },
  { time: "09:00-17:00", hall: "Hala D", title: "Premiera AiHouse" },
  {
    time: "13:30-15:30",
    hall: "Hala C",
    title: "Warsztaty AiHouse",
    details: "Sala konferencyjna, Hala C\nWymagany własny sprzęt",
  },
  { time: "12:00", hall: "F 3.01", title: "Pokaz Lovely Linen" },
  { time: "09:00-17:00", hall: "Hala F", title: "Studio Muratora" },
  { time: "14:00", hall: "D 1.14", title: "ArtFormy" },
  {
    time: "14:00",
    hall: "B 2.41",
    title:
      "WAYNERR® - Akademia zdrowego i bezpiecznego budownictwa przyszłości",
  },
  { time: "14:00", hall: "B 2.41", title: "Czwartek z Robertem Majkutem" },
  {
    time: "14:00",
    hall: "Hala F",
    title: "Prelekcja Małgorzaty Bernardy - firma VO",
  },
  { time: "14:00", hall: "Hala F", title: "Panel trendów i prezentacji" },
];

const TradeFairScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Plan Targów:</Text>
      <View style={styles.hallGrid}>
        {["Hala B", "Hala C", "Hala D", "Hala E, F"].map((hall, idx) => (
          <View
            key={idx}
            style={[
              styles.hallBox,
              hall === "Hala E, F" && styles.highlightBox,
            ]}
          >
            <Text style={styles.hallText}>{hall}</Text>
            {hall === "Hala E, F" && (
              <Text style={styles.standInfo}>Twoje stoisko – 3.47</Text>
            )}
          </View>
        ))}
      </View>

      <Text style={styles.header}>Wydarzenia towarzyszące (65)</Text>
      <View style={styles.dateRow}>
        {[23, 24, 25].map((day) => (
          <TouchableOpacity key={day} style={styles.dateButton}>
            <Text style={styles.dateText}>{day} paź</Text>
          </TouchableOpacity>
        ))}
      </View>

      {events.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          <Text style={styles.eventTime}>
            {event.time} | {event.hall}
          </Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
          {event.details && (
            <Text style={styles.eventDetails}>{event.details}</Text>
          )}
        </View>
      ))}

      <Text style={styles.footerText}>
        Wydarzenia towarzyszące to wspaniały pomysł lorem ipsum. Wydarzenia
        towarzyszące to wspaniały pomysł lorem ipsum
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Zgłoś wydarzenie na swoim stoisku</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#000",
    flex: 1,
    borderRadius: 18,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  hallGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  hallBox: {
    width: "48%",
    height: 96,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 12,
  },
  highlightBox: {
    borderColor: "#3b82f6",
    borderWidth: 2,
  },
  hallText: {
    color: "#fff",
    fontSize: 16,
  },
  standInfo: {
    marginTop: 4,
    fontSize: 12,
    color: "#3b82f6",
    textAlign: "center",
  },
  dateRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  dateButton: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  dateText: {
    color: "#fff",
  },
  eventCard: {
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  eventTime: {
    color: "#fff",
    fontWeight: "bold",
  },
  eventTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },
  eventDetails: {
    color: "#a1a1a1",
    fontSize: 12,
    marginTop: 4,
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TradeFairScreen;
