import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { router } from "expo-router";

export default function HomeScreen() {
  const [fromLocation, setFromLocation] = React.useState("");
  const [toLocation, setToLocation] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");

  const featuredFlights = [
    {
      id: 1,
      from: "New York",
      to: "Los Angeles",
      airline: "Delta Airlines",
      departure: "10:30 AM",
      arrival: "1:45 PM",
      price: "$299",
      duration: "5h 15m",
      stops: "Direct",
    },
    {
      id: 2,
      from: "Chicago",
      to: "Miami",
      airline: "American Airlines",
      departure: "2:15 PM",
      arrival: "5:30 PM",
      price: "$189",
      duration: "3h 15m",
      stops: "Direct",
    },
  ];

  const handleFlightPress = (flight: any) => {
    router.push({
      pathname: "/(app)/flight-details" as any,
      params: { flight: JSON.stringify(flight) },
    });
  };

  return (
    <ScrollView className="flex-1 bg-secondary/30">
      <View className="p-6 gap-6">
        {/* Welcome Header */}
        <View className="items-center mb-4">
          <Text className="text-3xl font-bold mb-2">Welcome Back!</Text>
          <Text className="text-muted-foreground text-center">
            Ready to explore the world? Find your perfect flight.
          </Text>
        </View>

        {/* Flight Search */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Search Flights</CardTitle>
            <CardDescription>
              Find the best deals for your next trip
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <Label>From</Label>
              <Input
                placeholder="Departure city"
                value={fromLocation}
                onChangeText={setFromLocation}
              />
            </View>
            <View className="gap-2">
              <Label>To</Label>
              <Input
                placeholder="Destination city"
                value={toLocation}
                onChangeText={setToLocation}
              />
            </View>
            <View className="gap-2">
              <Label>Departure Date</Label>
              <Input
                placeholder="MM/DD/YYYY"
                value={departureDate}
                onChangeText={setDepartureDate}
              />
            </View>
            <Button
              className="w-full mt-2"
              onPress={() => handleFlightPress(featuredFlights[0])}
            >
              <Text>Search Flights</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
