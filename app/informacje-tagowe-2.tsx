import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";

type Event = {
  time: string;
  hall: string;
  title: string;
  details?: string;
};

type EventItemProps = Event & {
  expanded: boolean;
  onToggle: () => void;
};

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
const EventItem: React.FC<EventItemProps> = ({
  time,
  hall,
  title,
  details,
  expanded,
  onToggle,
}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={onToggle} style={styles.itemHeader}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.hall}>{hall}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arrow}>{expanded ? "˄" : "˅"}</Text>
    </TouchableOpacity>
    {expanded && details && (
      <View style={styles.details}>
        <Text style={styles.detailsText}>{details}</Text>
        <TouchableOpacity>
          <Text style={styles.moreLink}>więcej ↗</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

const TradeFairScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(23);

  const events: Event[] = [
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

  const toggleExpand = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.header, { marginBottom: 25 }]}>Plan Targów:</Text>
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
              <View style={styles.standTag}>
                <Text style={styles.standText}>
                  Twoje stoisko <Text style={styles.boldStand}>– 3.47</Text>
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.header}>Wydarzenia towarzyszące (65)</Text>

      <View style={styles.dayPickerContainer}>
        <Text style={styles.subHeader}>Wybierz dzień targów:</Text>
        <View style={styles.dayButtonsRow}>
          {[23, 24, 25].map((day) => (
            <TouchableOpacity
              key={day}
              onPress={() => setSelectedDay(day)}
              style={[
                styles.dayButton,
                selectedDay === day && styles.selectedDayButton,
                day === 24 && styles.greenBorder,
                day === 25 && styles.orangeBorder,
              ]}
            >
              <Text style={styles.dayButtonText}>{day}</Text>
              <Text style={styles.dayButtonTextSmall}>paź</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {events.map((event, index) => (
        <EventItem
          key={index}
          {...event}
          expanded={expandedIndex === index}
          onToggle={() => toggleExpand(index)}
        />
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
    paddingVertical: 25,
    paddingHorizontal: 16,
    backgroundColor: "#2b2b2e",
    flex: 1,
    borderRadius: 18,
    borderColor: "#4d4c4f",
    borderWidth: 1,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  subHeader: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 8,
    marginRight: 20,
  },
  dayPickerContainer: {
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dayButtonsRow: {
    flexDirection: "row",
    gap: 10,
  },
  dayButton: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: "#2d2d2d",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedDayButton: {
    backgroundColor: "#6d83f2",
  },
  greenBorder: {
    borderColor: "#66ffcc",
  },
  orangeBorder: {
    borderColor: "#f2a154",
  },
  dayButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  dayButtonTextSmall: {
    color: "#fff",
    fontSize: 12,
    marginTop: -2,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingVertical: 12,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  time: {
    width: 90,
    color: "#ccc",
    fontSize: 11,
  },
  hall: {
    width: 60,
    color: "#aaa",
    fontSize: 11,
  },
  standTag: {
    position: "absolute",
    bottom: -10,
    backgroundColor: "#6d83f2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  standText: {
    color: "#fff",
    fontSize: 11,
  },
  boldStand: {
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 11,
  },
  arrow: {
    fontSize: 18,
    color: "#68fccc",
    paddingLeft: 10,
  },
  details: {
    marginTop: 8,
  },
  detailsText: {
    color: "#ccc",
    fontSize: 13,
    marginBottom: 4,
  },
  moreLink: {
    color: "#68fccc",
    fontSize: 13,
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
    backgroundColor: "#2b2b2e",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 12,
    borderColor: "#4d4c4f",
    borderWidth: 1,
  },
  highlightBox: {
    borderColor: "#6f87f6",
    borderWidth: 1,
  },
  hallText: {
    color: "#fff",
    fontSize: 12,
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
    backgroundColor: "#6f86f6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TradeFairScreen;
