import { Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import Stack from './Stack';
import { Colors } from '@/constants/Colors';

export function Footer() {
  const theme = useColorScheme() ?? 'light';
  const isDark = theme === 'dark';
  const textColor = { color: isDark ? Colors.dark.white : Colors.dark.grey };

  const logoSource = require('@/assets/images/logo-dark.png');

  return (
    <ThemedView
      style={{
        backgroundColor: 'transparent',
        marginTop: 50,
        marginBottom: 100,
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
    fontWeight: '500'
  },
});
