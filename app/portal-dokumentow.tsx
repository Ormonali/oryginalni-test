import { Footer } from "@/components/Footer";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";
import IconButton from "@/components/IconButton";
import DownloadIcon from "@/components/icons/Download";
import AssistantCard from "@/components/AssistantCard";

const faktury = [
  {
    name: 'Faktura 53739/234/T',
    link: 'Faktura 53739/234/T',
  },
  {
    name: 'Faktura 53739/234/T',
    link: 'Faktura 53739/234/T',
  },
]
export default function PortalScreen() {
  const router = useRouter();
  const goBack = ()=> {
    if (router.canGoBack()) {
      router.back()
    }else{
      router.navigate('/')
    }
  }

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
        <Text style={styles.headerText}>Portal dokumentow</Text>
      </View>

      <View
        style={styles.card}
      >
        <View style={styles.cardPadding}>
          <Text style={styles.cardTitle}>Faktury</Text>
          {
            faktury.map((el, index)=> (
              <View
                style={[
                  styles.item,
                  index === faktury.length - 1 && { borderBottomWidth: 0 }
                ]}
                key={index}
              >
                <Image
                  source={require('@/assets/images/file.png')}
                  style={styles.cardImage}
                />
                <Text style={styles.itemText}>{el.name}</Text>
                <IconButton onPress={() => router.navigate('/portal-dokumentow')} Icon={DownloadIcon} />
              </View>
            ))
          }  
        </View>
        
        <View
        style={styles.cardGrey}
        >
          <View style={styles.cardPadding}>
            <Text style={styles.cardTitle}>Dokumenty do pobrania</Text>
            {
              faktury.map((el, index)=> (
                <View
                  style={[
                    styles.item,
                    index === faktury.length - 1 && { borderBottomWidth: 0 }
                  ]}
                  key={index}
                >
                  <Image
                    source={require('@/assets/images/file.png')}
                    style={styles.cardImage}
                  />
                  <Text style={styles.itemText}>{el.name}</Text>
                  <IconButton onPress={() => router.navigate('/portal-dokumentow')} Icon={DownloadIcon} />
                </View>
              ))
            }
          </View>
          <View
        style={styles.card}
        >
          <View style={styles.cardPadding}>
            <Text style={styles.cardTitle}>Umowy</Text>
            {
              faktury.map((el, index)=> (
                <View
                  style={[
                    styles.item,
                    index === faktury.length - 1 && { borderBottomWidth: 0 }
                  ]}
                  key={index}
                >
                  <Image
                    source={require('@/assets/images/file.png')}
                    style={styles.cardImage}
                  />
                  <Text style={styles.itemText}>{el.name}</Text>
                  <IconButton onPress={() => router.navigate('/portal-dokumentow')} Icon={DownloadIcon} />
                </View>
              ))
            }
          </View>
          
        </View>
          
        </View>
      </View>
      <View style={styles.cardPadding}>
        <AssistantCard
          title="Czegos brakuje? Zadaj nam pytanie:"
          name="Magda Masny"
          phone="+48 518 739 124"
          email="m.masny@warsawexpo.eu"
          avatarUrl="https://via.placeholder.com/50"
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
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
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
  backArrow: {
    color: Colors.tint,
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
    color: Colors.black,
    fontWeight: "600",
  },
  cardPadding:{
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cardGrey: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardImage: {
    width: 26,
    height: 26
  },
  cardTitle:{
    fontSize: 18,
    marginLeft: 20, 
    marginVertical: 20
  },
  itemText: {
    fontSize: 14,
    marginRight: 'auto',
    marginLeft: 14
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.underline,
    borderBottomWidth: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  }
  
});
