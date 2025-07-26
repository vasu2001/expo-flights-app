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
import { SearchableInput } from "~/components/ui/searchable-input";
import { router } from "expo-router";

export default function HomeScreen() {
  const [fromLocation, setFromLocation] = React.useState("");
  const [fromLocationLabel, setFromLocationLabel] = React.useState("");
  const [toLocation, setToLocation] = React.useState("");
  const [toLocationLabel, setToLocationLabel] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");

  // Search queries for API calls
  const [fromSearchQuery, setFromSearchQuery] = React.useState("");
  const [toSearchQuery, setToSearchQuery] = React.useState("");

  // Sample airport data
  const airports = [
    {
      value: "JFK",
      label: "John F. Kennedy International Airport",
      description: "New York, NY",
    },
    {
      value: "LAX",
      label: "Los Angeles International Airport",
      description: "Los Angeles, CA",
    },
    {
      value: "ORD",
      label: "O'Hare International Airport",
      description: "Chicago, IL",
    },
    {
      value: "DFW",
      label: "Dallas/Fort Worth International Airport",
      description: "Dallas, TX",
    },
    {
      value: "ATL",
      label: "Hartsfield-Jackson Atlanta International Airport",
      description: "Atlanta, GA",
    },
    {
      value: "DEN",
      label: "Denver International Airport",
      description: "Denver, CO",
    },
    {
      value: "SFO",
      label: "San Francisco International Airport",
      description: "San Francisco, CA",
    },
    {
      value: "MIA",
      label: "Miami International Airport",
      description: "Miami, FL",
    },
    {
      value: "SEA",
      label: "Seattle-Tacoma International Airport",
      description: "Seattle, WA",
    },
    {
      value: "LAS",
      label: "McCarran International Airport",
      description: "Las Vegas, NV",
    },
    {
      value: "BOS",
      label: "Boston Logan International Airport",
      description: "Boston, MA",
    },
    {
      value: "PHX",
      label: "Phoenix Sky Harbor International Airport",
      description: "Phoenix, AZ",
    },
    {
      value: "IAH",
      label: "George Bush Intercontinental Airport",
      description: "Houston, TX",
    },
    {
      value: "MCO",
      label: "Orlando International Airport",
      description: "Orlando, FL",
    },
    {
      value: "CLT",
      label: "Charlotte Douglas International Airport",
      description: "Charlotte, NC",
    },
  ];

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
            <SearchableInput
              label="From"
              placeholder="Search departure airport"
              selectedValue={fromLocation}
              selectedLabel={fromLocationLabel}
              onSearchChange={setFromSearchQuery}
              options={airports.filter((airport) =>
                airport.label
                  .toLowerCase()
                  .includes(fromSearchQuery.toLowerCase())
              )}
              onSelect={(option) => {
                setFromLocation(option.value);
                setFromLocationLabel(option.label);
              }}
            />
            <SearchableInput
              label="To"
              placeholder="Search destination airport"
              selectedValue={toLocation}
              selectedLabel={toLocationLabel}
              onSearchChange={setToSearchQuery}
              options={airports}
              onSelect={(option) => {
                setToLocation(option.value);
                setToLocationLabel(option.label);
              }}
            />
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
