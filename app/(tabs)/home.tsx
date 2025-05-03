import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Footer } from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { Subheader } from 'react-native-paper/lib/typescript/components/List/List';
import IconButton from '@/components/IconButton';
import RightBtnIcon from '@/components/icons/RightBtn';
import BellIcon from '@/components/icons/Bell';
import Spacer from '@/components/Spacer';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';


export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';
  const styles = getStyles(theme);

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
        <Spacer height={20}/>
        <Text style={styles.header}>Ważne sprawy dotyczące wydarzenia:</Text>
        <View style={styles.cardGlass}>
          <Image
            source={require('@/assets/images/bell.svg')}
            style={styles.cardImage}
          />
          <Text style={styles.itemText}>Informacje <br />targowe</Text>
          <IconButton onPress={()=>{}} Icon={RightBtnIcon}/>
        </View>
        <View style={styles.cardGlass}>
          <Image
            source={require('@/assets/images/bell.svg')}
            style={styles.cardImage}
          />
          <Text style={styles.itemText}>Portal <br />dokumentów</Text>
          <IconButton onPress={()=>{}} Icon={RightBtnIcon}/>
        </View>
        <View style={styles.cardGlass}>
          <Image
            source={require('@/assets/images/bell.svg')}
            style={styles.cardImage}
          />
          <Text style={styles.itemText}>Materialy <br />marketingowe</Text>
          <IconButton onPress={()=>{}} Icon={RightBtnIcon}/>
        </View>
        <View style={styles.cardGlass}>
          <Image
            source={require('@/assets/images/bell.svg')}
            style={styles.cardImage}
          />
          <Text style={styles.itemText}>Generator <br />zaproszen</Text>
          <IconButton onPress={()=>{}} Icon={RightBtnIcon}/>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
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
    color: Colors[theme].text,
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
    backgroundColor: Colors[theme].white,
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: Colors[theme].black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: Colors[theme].grey,
  },
  dates: {
    color: Colors[theme].tint,
    marginBottom: 8,
  },
  link: {
    color: Colors[theme].text,
    marginBottom: 8,
    textDecorationColor: Colors[theme].text,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 8,
    color: Colors[theme].text,
  },
  daysLeft: {
    fontSize: 12,
    color: Colors[theme].white,
    marginBottom: 18,
    backgroundColor: Colors[theme].cardAccent,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
    fontWeight: '200',
  },
  bold: {
    fontWeight: 'bold',
    color: Colors[theme].text,
  },
  subheader: {
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 0,
    color: Colors[theme].grey,
  },
  progressText: {
    backgroundColor: Colors[theme].progressWarning,
    color: Colors[theme].white,
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
    color: Colors[theme].grey,
    fontWeight: '200',
  },
  button: {
    marginTop: 8,
    marginBottom: 12,
    backgroundColor: Colors[theme].cardAccent,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors[theme].white,
    fontWeight: '600',
  },
  cardGlass: {
    borderColor: Colors[theme].white,
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: Colors[theme].glassCardBackground,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 16,
    shadowColor: Colors[theme].black,
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
    color: Colors[theme].grey,
    marginRight: 'auto',
  },
});
