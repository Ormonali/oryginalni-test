// components/FileDownloader.tsx
import React, { useState } from "react";
import { Alert, ActivityIndicator, Platform } from "react-native";
import IconButton from "@/components/IconButton";
import DownloadIcon from "@/components/icons/Download";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

type FileDownloaderProps = {
  url: string;
  filename: string;
};

const cleanString = (input: string): string =>
  input.replace(/[\n\r\t\\\/:*?"<>|]/g, "").trim();

const FileDownloader: React.FC<FileDownloaderProps> = ({ url, filename }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    const cleanedFilename = cleanString(filename);
    console.log(`📦 Preparing to download: ${cleanedFilename}`);
    setDownloading(true);

    try {
      console.log("🔐 Requesting media library permissions...");
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== "granted") {
        console.warn("🚫 Permission denied for media library");
        Alert.alert("Brak uprawnień", "Brak dostępu do pamięci urządzenia.");
        return;
      }

      const fileUri = FileSystem.documentDirectory + cleanedFilename;
      console.log(`📁 Downloading to: ${fileUri}`);
      console.log(`🌐 From URL: ${url}`);

      const result = await FileSystem.downloadAsync(url, fileUri);

      if (!result?.uri) {
        console.error("❌ FileSystem returned no URI.");
        throw new Error("Download failed");
      }

      const isImage = /\.(png|jpg|jpeg|gif|bmp|heic|webp)$/i.test(cleanedFilename);
      console.log(`📄 Detected file type: ${isImage ? "image" : "non-image"}`);

      if (isImage && Platform.OS === "android") {
        console.log("📸 Saving image to media library...");
        await MediaLibrary.saveToLibraryAsync(result.uri);
        Alert.alert("Obraz zapisany", "Zdjęcie zostało zapisane do galerii.");
        console.log("✅ Image saved to gallery.");
      } else {
        Alert.alert("Pobrano plik", `Zapisano do folderu aplikacji:\n${result.uri}`);
        console.log("✅ File downloaded and saved in app folder.");
      }
    } catch (error: any) {
      console.error("❌ Download error:", error);
      Alert.alert("Błąd", error?.message || "Nie udało się pobrać pliku.");
    } finally {
      console.log("🔁 Download operation complete.");
      setDownloading(false);
    }
  };

  return downloading ? (
    <ActivityIndicator size="small" />
  ) : (
    <IconButton onPress={handleDownload} Icon={DownloadIcon} />
  );
};

export default FileDownloader;
