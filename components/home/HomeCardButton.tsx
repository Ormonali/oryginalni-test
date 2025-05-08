// components/HomeCardButton.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import IconButton from '@/components/IconButton';
import RightBtnIcon from '@/components/icons/RightBtn';
import { Colors } from '@/constants/Colors';

type Props = {
  text: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export default function HomeCardButton({ text, image, onPress }: Props) {
  return (
    <View style={styles.cardGlass}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.itemText}>{text}</Text>
      <IconButton onPress={onPress} Icon={RightBtnIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
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
