import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="flight-details"
        options={{
          title: "Flight Details",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
