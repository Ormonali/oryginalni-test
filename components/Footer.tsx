import { Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Stack from './Stack';
import { Colors } from '@/constants/Colors';

type FooterProps = {
  colorMode?: 'light' | 'dark';
};

export function Footer({ colorMode = 'light' }: FooterProps) {
  const isDark = colorMode === 'dark';
  const textColor = { color: isDark ? Colors.white : Colors.grey,  };

  const logoSource = require('@/assets/images/logo-dark.png');

  return (
    <ThemedView
      style={{
        backgroundColor: 'transparent',
        marginTop: 50,
        marginBottom: 120,
        alignItems: 'center',
      }}
    >
      <Stack spacing={20} justifyContent="center">
        <Image
          style={styles.image}
          source={logoSource}
        />
        <Stack direction="row" spacing={8} alignItems="center">
          <ThemedText style={[styles.text, textColor]}>Kontakt</ThemedText>
          <ThemedText style={[styles.text, textColor]}>•</ThemedText>
          <ThemedText style={[styles.text, textColor]}>Polityka prywatności</ThemedText>
          <ThemedText style={[styles.text, textColor]}>•</ThemedText>
          <ThemedText style={[styles.text, textColor]}>www.warsawexpo.eu</ThemedText>
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
