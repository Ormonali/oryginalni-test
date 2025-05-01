import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Footer } from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { Subheader } from 'react-native-paper/lib/typescript/components/List/List';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingContainer}>
          <Image
            source={require('@/assets/images/logo.webp')} // Adjust the path based on your setup
            style={styles.avatar}
          />
          <View style={styles.greetingTextContainer}>
            <Text style={styles.header}>Dzień dobry, MTB Modules 👋</Text>
            <Text style={styles.subheader}>Sprawdz co mozesz dzisiaj zrobic!</Text>
          </View>
        </View>
        {/* Event Info */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Image style={styles.rightSpace}
              source={require('@/assets/images/expo.png')} // Adjust the path based on your setup
            />
            <View style={styles.container}>
              <Text style={styles.label}>Twoje wydarzenie:</Text>
              <Text style={styles.dates}>11.03.2026–15.03.2026</Text>
              <Text style={styles.title}>International Trade Fair for Building Technologies and Materials</Text>
              <Text style={styles.link}>zmień</Text>
            </View>
          </View>
        </View>

        {/* Checklist Progress */}
        <View style={styles.card}>
          <Text style={styles.daysLeft}>Do wydarzenia zostało <Text style={styles.bold}>386 dni</Text></Text>
          <View style={styles.row}>
            <Text style={styles.header}>Dobrze Ci idzie! <br />Uzupełniaj checklistę dalej!</Text>
            <Text style={styles.progressText}>21%</Text>
          </View>
          {/* Add progress bar or image bar if needed */}
          <Text style={styles.paragraph}>
            Uzupełnij wszystkie kroki z checklisty by być jak najlepiej przygotowanym na to wydarzenie.
          </Text>
          <ProgressBar progress={21}/>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Idź do checklisty</Text>
          </View>
        </View>

        {/* Important Event Topics */}
        <Text style={styles.header}>Ważne sprawy dotyczące wydarzenia:</Text>
        <View style={styles.cardGlass}>
          <Image
            source={require('@/assets/images/logo.webp')} // Adjust the path based on your setup
            style={styles.cardImage}
          />
          <Text style={styles.itemText}>Informacje <br />targowe</Text>
          
        </View>
        <View style={styles.cardGlass}>
          <Text style={styles.itemText}>Portal</Text>
        </View>
        <View style={styles.cardGlass}>
          <Text style={styles.itemText}>Materiały</Text>
        </View>
        <Footer />
      </ScrollView>
      {/* Fixed Footer */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80, // space for footer
  },
  rightSpace:{
    marginRight: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  greetingTextContainer: {
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 24,
    marginRight: 16,
    resizeMode: 'cover'
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  dates: {
    color: '#4a64d1',
    marginBottom: 8,
  },
  link: {
    color: '#333',
    marginBottom: 8,
    textDecorationColor: '#333',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 8,
  },
  daysLeft: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 18,
    backgroundColor: '#2E2E38',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
    fontWeight: '200'
  },
  bold: {
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 0,
    color: '#666',
  },
  progressText: {
    backgroundColor: '#FC0D06',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 'auto'
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 12,
    color: '#666',
    fontWeight: '200'
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2E2E38',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cardGlass: {
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: '#F6F7F8',
    padding: 24,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 30,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: "#6F6F6F"
  },
});
