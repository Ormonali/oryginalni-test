import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  imageSource: any;
  label: string;
  dates: string;
  title: string;
  buttonText: string;
  onChangePress?: () => void;
};

export default function EventInfoCard({ imageSource, label, dates, title, buttonText, onChangePress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.rightSpace} source={imageSource} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.dates}>{dates}</Text>
          <Text style={styles.title}>{title}</Text>
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
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSpace: {
    marginRight: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
  },
  dates: {
    color: Colors.tint,
    marginBottom: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
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
