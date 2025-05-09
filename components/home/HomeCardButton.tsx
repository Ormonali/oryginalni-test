import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg'; // ✅ Import correct props type
import IconButton from '@/components/IconButton';
import RightBtnIcon from '@/components/icons/RightBtn';
import { Colors } from '@/constants/Colors';

type Props = {
  text: string;
  SvgIcon: React.FC<SvgProps>;
  onPress: () => void;
};

export default function HomeCardButton({ text, SvgIcon, onPress }: Props) {
  return (
    <View style={styles.cardGlass}>
      <SvgIcon width={50} height={50} style={styles.cardImage} />
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
    marginRight: 30,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.grey,
    marginRight: 'auto',
  },
});
