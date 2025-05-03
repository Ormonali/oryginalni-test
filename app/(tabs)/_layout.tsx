import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home';
import AktualnosciScreen from './aktualnosci';
import EbiletScreen from './e-bilet';
import ProfileScreen from './profile';

type TabConfig = {
  name: string;
  label: string;
  icon: string;
  color?: string;
};

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

const TABS: TabConfig[] = [
  { name: 'home', label: 'Home', icon: 'home-outline', color: '#4a64d1' },
  { name: 'aktualnosci', label: 'Aktualności', icon: 'file-document-outline', color: '#e91e63' },
  { name: 'e-bilet', label: 'E-bilet', icon: 'ticket-outline', color: '#ff9800' },
  { name: 'profile', label: 'Profil', icon: 'account-outline', color: '#4caf50' },
];

const MyTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const tabWidth = (width - 32) / TABS.length;
  const barWidth = 50
  console.log(tabWidth, state.index)

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: tabWidth * state.index + (tabWidth - barWidth) / 2,
      useNativeDriver: true,
    }).start();
  }, [state.index, tabWidth]);

  const activeColor = TABS[state.index]?.color || '#000';

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              width: barWidth,
              backgroundColor: activeColor,
              transform: [{ translateX }],
              shadowColor: activeColor, // dynamic shadow
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.7,
              shadowRadius: 6,
              elevation: 6, // Android
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key] as {
            options: BottomTabNavigationOptions;
          };
          const label = options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          const tabConfig = TABS.find(tab => tab.name === route.name);

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
            >
              <Icon
                name={tabConfig?.icon || 'circle'}
                size={24}
                color={'#6F6F6F'}
              />
              <Text style={styles.tabText}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function Screen() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="aktualnosci" component={AktualnosciScreen} options={{ title: 'Aktualności' }} />
      <Tab.Screen name="e-bilet" component={EbiletScreen} options={{ title: 'E-bilet' }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
  },
  tabBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    overflow: 'hidden',
    shadowColor: '#4a64d1',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText:{
    fontSize: 12, 
    fontWeight: '500', 
    color: '#6F6F6F', 
    paddingTop: 5,
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 3,
  },
});
