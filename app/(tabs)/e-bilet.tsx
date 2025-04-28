import { View, Text, StyleSheet } from 'react-native';
export function EbiletScreen() {
    return (
      <View style={styles.screen}><Text>E-bilet Screen</Text></View>
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