import { Footer } from '@/components/Footer';
import { View, Text, StyleSheet } from 'react-native';
export default function HomeScreen() {
    return (
      <View style={styles.screen}>
        <Text>Home Screen</Text>
        <Footer/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    screen: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    notificationDot: {
      position: 'absolute',
      top: -2,
      right: -6,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'red',
    },
  });
  