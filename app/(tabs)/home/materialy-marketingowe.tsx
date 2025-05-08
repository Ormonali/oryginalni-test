import { Footer } from "@/components/Footer";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import IconButton from "@/components/IconButton";
import DownloadIcon from "@/components/icons/Download";
import * as FileSystem from "expo-file-system";
import FileDownloader from "@/components/FileDownloader";

const materials = {
  logotypy: [
    {
      name: "Logotyp wydarzenia",
      image: require("@/assets/images/expo.png"),
      url: "https://file-examples.com/storage/fe5f3edaa0f5ee2f9b4396e/2017/10/file_example_PNG_500kB.png",
    },
    {
      name: "Logotyp Ptak Expo",
      image: require("@/assets/images/logo-dark.png"),
      url: "https://file-examples.com/storage/fe5f3edaa0f5ee2f9b4396e/2017/10/file_example_PNG_500kB.png",
    },
  ],
  banery: [
    {
      name: "800x800",
      image: require("@/assets/images/expo.png"),
      url: "https://file-examples.com/storage/fe5f3edaa0f5ee2f9b4396e/2017/10/file_example_PNG_500kB.png",
    },
    {
      name: "1200x200",
      image: require("@/assets/images/expo.png"),
      url: "https://file-examples.com/storage/fe5f3edaa0f5ee2f9b4396e/2017/10/file_example_PNG_500kB.png",
    },
  ],
};
const testFile = "https://file-examples.com/storage/fe5f3edaa0f5ee2f9b4396e/2017/10/file_example_PNG_500kB.png"

type MaterialItem = {
  name: string;
  image: any;
  url: string;
};

export default function MaterialMarketingScreen() {
  const router = useRouter();
  const goBack = () => (router.canGoBack() ? router.back() : router.navigate("/"));

  const renderSection = (title: string, items: MaterialItem[]) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={[styles.itemContent, isLast && styles.lastItem]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <FileDownloader url={item.url} filename={`${item.name}.pdf`} />
            </View>
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.headerText}>Materiały Marketingowe</Text>
      </View>

      <View style={styles.card}>
        {renderSection("Logotypy", materials.logotypy)}
        {renderSection("Banery z Twoim logo", materials.banery)}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pozostałe dokumenty</Text>
          <View style={[styles.itemContent, styles.lastItem]}>
            <Image
              source={require("@/assets/images/file.png")}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Notka prasowa o targach</Text>
            <FileDownloader url={testFile} filename="NotkaPrasowa.pdf" />
          </View>
        </View>
      </View>

      <Footer imageColor="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlack,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: -5,
    left: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.backgroundBlack,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  backArrow: {
    fontSize: 24,
    color: Colors.backBtn,
    marginTop: -4,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.white,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 10,
    marginTop: 20,
  },
  section: {
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 12,
  },
  itemIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.underline,
    paddingBottom: 12,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "100",
    paddingLeft: 10,
  },
});
