// home.tsx
import { Stack } from "expo-router";


export default function HomeScreen() {
  return (
    <Stack>
      <Stack.Screen name="zaplanowana-wydarzenia" options={{headerShown: false}}/>
      <Stack.Screen name="portal-dokumentow" options={{ headerShown: false,  }} />
      <Stack.Screen name="materialy-marketingowe" options={{ headerShown: false,  }} />
      <Stack.Screen name="informacje-targowe" options={{ headerShown: false,  }} />
    </Stack>
  );
}
