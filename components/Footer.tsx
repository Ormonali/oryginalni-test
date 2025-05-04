import { Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Stack from './Stack';
import { Colors } from '@/constants/Colors';

type FooterProps = {
  textColor?: 'light' | 'dark';
  imageColor?: 'light' | 'dark';
};

export function Footer({ textColor = 'dark', imageColor = 'dark' }: FooterProps) {
  const txtColor = { color: textColor == 'light' ? Colors.white : Colors.grey,  };

  const logoSource = imageColor ==  'light' ?  require('@/assets/images/logo-white.png') : require('@/assets/images/logo-dark.png');

  return (
    <ThemedView
      style={{
        backgroundColor: 'transparent',
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center',
      }}
    >
      <Stack spacing={20} justifyContent="center">
        <Image
          style={styles.image}
          source={logoSource}
        />
        <Stack direction="row" spacing={8} alignItems="center">
          <ThemedText style={[styles.text, txtColor]}>Kontakt</ThemedText>
          <ThemedText style={[styles.text, txtColor]}>•</ThemedText>
          <ThemedText style={[styles.text, txtColor]}>Polityka prywatności</ThemedText>
          <ThemedText style={[styles.text, txtColor]}>•</ThemedText>
          <ThemedText style={[styles.text, txtColor]}>www.warsawexpo.eu</ThemedText>
        </Stack>
      </Stack>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 10,
    fontWeight: 300,
  },
});
