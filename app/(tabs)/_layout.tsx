import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet, View,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home';
import AktualnosciScreen from './aktualnosci';
import EbiletScreen from './e-bilet';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

export default function Screen() {
  const showDot = true; // you can control this dynamically (ex: unread notifications)

  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 20,
            height: 70,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen 
          name="home" 
          component={HomeScreen} 
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="aktualnosci" 
          component={AktualnosciScreen} 
          options={{
            title: "Aktualności",
            tabBarIcon: ({ color, size }) => (
              <View>
                <Icon name="file-document-outline" color={color} size={24} />
                {showDot && (
                  <View style={styles.notificationDot} />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="e-bilet" 
          component={EbiletScreen} 
          options={{
            title: "E-bilet",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ticket-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="profile" 
          component={ProfileScreen} 
          options={{
            title: "Profil",
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-outline" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
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