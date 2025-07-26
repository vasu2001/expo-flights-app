import React, { useEffect } from "react";
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
import { Label } from "~/components/ui/label";
import {
  SearchableInput,
  SearchableInputOption,
} from "~/components/ui/searchable-input";
import { router } from "expo-router";
import * as Location from "expo-location";
import { useNearbyAirports, useSearchAirports } from "~/lib/flight-queries";
import { DatePicker } from "~/components/ui/date-picker";

export default function HomeScreen() {
  const [fromLocation, setFromLocation] = React.useState("");
  const [fromLocationLabel, setFromLocationLabel] = React.useState("");
  const [toLocation, setToLocation] = React.useState("");
  const [toLocationLabel, setToLocationLabel] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");

  // Search queries for airport API calls
  const [fromSearchQuery, setFromSearchQuery] = React.useState("");
  const [toSearchQuery, setToSearchQuery] = React.useState("");

  //airport search results
  const nearbyAirports = useNearbyAirportsPrefill();
  const fromAirportSearchResults = useAirportSearch(fromSearchQuery);
  const toAirportSearchResults = useAirportSearch(toSearchQuery);

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

  console.log("homescreen render");

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
              options={
                fromSearchQuery ? fromAirportSearchResults : nearbyAirports
              }
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
              options={toSearchQuery ? toAirportSearchResults : nearbyAirports}
              onSelect={(option) => {
                setToLocation(option.value);
                setToLocationLabel(option.label);
              }}
            />
            <View className="gap-1">
              <Label>Departure Date</Label>
              <DatePicker
                value={departureDate}
                onValueChange={setDepartureDate}
                placeholder="Select departure date"
                minDate={new Date().toISOString()}
              />
            </View>
            <View className="gap-1">
              <Label>Return Date</Label>
              <DatePicker
                value={returnDate}
                onValueChange={setReturnDate}
                placeholder="Select return date"
                minDate={departureDate || new Date().toISOString()}
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

const useUserLocation = () => {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [userLocation, setUserLocation] =
    React.useState<Location.LocationObject | null>(null);

  const getUserLocation = async () => {
    if (status?.granted) {
      const location = await Location.getLastKnownPositionAsync({
        maxAge: 1000 * 60 * 60, // 1 hour
      });
      setUserLocation(location);
    } else {
      requestPermission();
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return userLocation;
};

const useNearbyAirportsPrefill = (): SearchableInputOption[] => {
  const userLocation = useUserLocation();
  const nearbyAirports = useNearbyAirports(
    userLocation
      ? {
          lat: userLocation?.coords.latitude,
          lng: userLocation?.coords.longitude,
        }
      : null
  );

  return nearbyAirports.isFetched
    ? nearbyAirports.data?.data.nearby?.map((airport) => ({
        value: airport.navigation.relevantFlightParams.skyId,
        label: airport.presentation.suggestionTitle,
        description: airport.presentation.subtitle,
      })) || []
    : [];
};

const useAirportSearch = (searchQuery: string): SearchableInputOption[] => {
  const airportSearch = useSearchAirports({
    query: searchQuery,
  });

  return airportSearch.isFetched
    ? airportSearch.data?.data.map((airport) => ({
        value: airport.navigation.relevantFlightParams.skyId,
        label: airport.presentation.suggestionTitle,
        description: airport.presentation.subtitle,
      })) || []
    : [];
};
