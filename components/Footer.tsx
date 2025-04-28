import { PropsWithChildren, useState } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import Stack from './Stack';

export function Footer() {
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={{backgroundColor: 'transparent', marginTop: 50, marginBottom: 20 }}>
        <Stack spacing={20} justifyContent="center">
            <Image style={styles.image} source={require('@/assets/images/react-logo.png')}/>
            <Stack direction="row" spacing={20}>
                <ThemedText style={styles.text}>
                    Kontakt
                </ThemedText>
                <ThemedText style={styles.text}>
                    Polityka prywatnosci
                </ThemedText>
                <ThemedText style={styles.text}>
                    www.warsawexpo.eu
                </ThemedText>
            </Stack>
        </Stack>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    content: {
        marginTop: 6,
        marginLeft: 24,
    },
    text: {
        fontSize: 10,
    }
});
