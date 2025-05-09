import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  imageSource: any;
  label?: string;
  dates: string;
  title: string;
  buttonText: string;
  onChangePress?: () => void;
};

export default function EventInfoCard({ imageSource, label, dates, title, buttonText, onChangePress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.textsContainer}>
          <Text style={styles.label}>{label || ''}</Text>
          <Text style={styles.dates}>{dates}</Text>
          <Text style={styles.title} numberOfLines={3}>{title}</Text>
          <Pressable onPress={onChangePress}>
            <Text style={styles.link}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardColor,
    borderColor: Colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  textsContainer:{
    flex: 1,
    marginLeft: 'auto'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    minHeight: 20,
    color: Colors.grey,
  },
  dates: {
    color: Colors.accent,
    marginBottom: 8,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 8,
    color: Colors.text,
  },
  link: {
    color: Colors.text,
    marginBottom: 8,
    textDecorationColor: Colors.text,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
});
