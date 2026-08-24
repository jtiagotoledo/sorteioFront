import "../../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title:'Sorteio de Grupos',
        headerStyle:{ backgroundColor:'#1e293b'},
        headerTintColor: '#f1f5f9',
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}