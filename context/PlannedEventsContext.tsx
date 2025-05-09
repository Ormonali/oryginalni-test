import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockEvents = [
  {
    id: '1',
    imageSource: '@/assets/images/expo.png',
    dates: '11.03.2026–15.03.2026',
    title: 'International Trade Fair for Building Technologies and Materials',
  },
  {
    id: '2',
    imageSource: '@/assets/images/expo.png',
    dates: '20.04.2026–22.04.2026',
    title: 'International Trade Fair for Building Technologies and Materials',
  },
  {
    id: '3',
    imageSource: '@/assets/images/expo.png',
    dates: '01.06.2026–03.06.2026',
    title: 'International Trade Fair for Building Technologies and Materials',
  },
];

type PlannedEvent = {
  id: string;
  title: string;
  dates: string;
  imageSource: any;
};

type PlannedEventsContextType = {
  plannedEvents: PlannedEvent[];
};

const STORAGE_KEY = 'planned_events';
// const TOKEN_KEY = 'api_token';
// const API_URL = 'https://your-api.com/planned-events';

const PlannedEventsContext = createContext<PlannedEventsContextType | undefined>(undefined);

export const PlannedEventsProvider = ({ children }: { children: ReactNode }) => {
  const [plannedEvents, setPlannedEvents] = useState<PlannedEvent[]>([]);

  const assignImage = (event: any): PlannedEvent => ({
    ...event,
    imageSource: require('@/assets/images/expo.png'),
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // --------------------------
        // API FETCH BLOCK (commented for now)
        // const token = await AsyncStorage.getItem(TOKEN_KEY);
        // if (!token) throw new Error('API token not found');

        // const response = await fetch(API_URL, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        // if (!response.ok) throw new Error('API error');
        // const data = await response.json();
        // const enriched = data.map(assignImage);
        // --------------------------

        // Use mock data for now
        const enriched = mockEvents.map(assignImage);

        setPlannedEvents(enriched);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mockEvents));
      } catch (error) {
        console.warn('Failed to fetch events. Using AsyncStorage or mock:', error);
        try {
          const localData = await AsyncStorage.getItem(STORAGE_KEY);
          if (localData) {
            const parsed = JSON.parse(localData).map(assignImage);
            setPlannedEvents(parsed);
          } else {
            // If nothing is stored, use mock
            const enriched = mockEvents.map(assignImage);
            setPlannedEvents(enriched);
          }
        } catch (e) {
          console.error('Failed to load events from AsyncStorage:', e);
        }
      }
    };

    fetchEvents();
  }, []);


  return (
    <PlannedEventsContext.Provider value={{ plannedEvents }}>
      {children}
    </PlannedEventsContext.Provider>
  );
};

export const usePlannedEvents = () => {
  const context = useContext(PlannedEventsContext);
  if (!context) {
    throw new Error('usePlannedEvents must be used within a PlannedEventsProvider');
  }
  return context;
};
