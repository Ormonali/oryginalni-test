import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Footer } from '@/components/Footer';
import Spacer from '@/components/Spacer';
import { Colors } from '@/constants/Colors';
import EventInfoCard from '@/components/EventInfoCard';


export default function PlannedEventsScreen() {
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
        <Spacer height={20}/>
        <EventInfoCard
          imageSource={require('@/assets/images/expo.png')}
          label="Twoje wydarzenie:"
          dates="11.03.2026–15.03.2026"
          title="International Trade Fair for Building Technologies and Materials"
          buttonText="wybierz"
          onChangePress={() => {}}
        />
        <Footer />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    paddingTop: 70,
    paddingLeft: 16,
    paddingRight: 16
  },
  rightSpace: {
    marginRight: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.text,
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
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
  },
  dates: {
    color: Colors.tint,
    marginBottom: 8,
  },
  link: {
    color: Colors.text,
    marginBottom: 8,
    textDecorationColor: Colors.text,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 8,
    color: Colors.text,
  },
  daysLeft: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 18,
    backgroundColor: Colors.cardAccent,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
    fontWeight: '200',
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.text,
  },
  subheader: {
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 0,
    color: Colors.grey,
  },
  progressText: {
    backgroundColor: Colors.progressWarning,
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 'auto',
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 12,
    color: Colors.grey,
    fontWeight: '200',
  },
  button: {
    marginTop: 8,
    marginBottom: 12,
    backgroundColor: Colors.cardAccent,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
  },
  cardGlass: {
    borderColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: Colors.glassCardBackground,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 30,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.grey,
    marginRight: 'auto',
  },
});
