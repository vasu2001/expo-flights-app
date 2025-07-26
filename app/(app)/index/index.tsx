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
import {
  useNearbyAirports,
  useSearchAirports,
  useSearchFlights,
} from "~/lib/flight-queries";
import { DatePicker } from "~/components/ui/date-picker";
import { FlightResultsList } from "~/components/ui/flight-results-list";
import moment from "moment";
import { AirportLocation, FlightItinerary } from "~/api/flight-client";
import { searchFlightsResponseSample } from "~/api/flight-client/sample-response";

export default function HomeScreen() {
  const [fromLocation, setFromLocation] =
    React.useState<AirportLocation | null>(null);
  const [toLocation, setToLocation] = React.useState<AirportLocation | null>(
    null
  );
  const [departureDate, setDepartureDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");

  // Search queries for airport API calls
  const [fromSearchQuery, setFromSearchQuery] = React.useState("");
  const [toSearchQuery, setToSearchQuery] = React.useState("");

  //airport search results
  const nearbyAirports = useNearbyAirportsPrefill();
  const fromAirportSearchResults = useAirportSearch(fromSearchQuery);
  const toAirportSearchResults = useAirportSearch(toSearchQuery);

  //flights search query
  const {
    data: flightsSearchData,
    refetch: refetchFlightsSearch,
    isLoading: isFlightsSearchLoading,
    isFetched: isFlightsSearchFetched,
  } = useSearchFlights({
    originSkyId: fromLocation?.navigation.relevantFlightParams.skyId || "",
    originEntityId:
      fromLocation?.navigation.relevantFlightParams.entityId || "",
    destinationSkyId: toLocation?.navigation.relevantFlightParams.skyId || "",
    destinationEntityId:
      toLocation?.navigation.relevantFlightParams.entityId || "",
    date: departureDate,
    returnDate: returnDate,
    adults: 1,
    childrens: 0,
    infants: 0,
    cabinClass: "economy",
  });

  const handleFlightSearch = async () => {
    refetchFlightsSearch();
  };

  const handleFlightPress = (flight: FlightItinerary) => {
    // Navigate to flight details page
    router.push({
      pathname: "/(app)/index/flight-details",
      params: { flightId: flight.id },
    });
  };

  console.log("homescreen render");

  return (
    <View className="flex-1 bg-secondary/30">
      <ScrollView className="flex-1">
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
                selectedLabel={fromLocation?.presentation.suggestionTitle}
                onSearchChange={setFromSearchQuery}
                options={
                  fromSearchQuery ? fromAirportSearchResults : nearbyAirports
                }
                onSelect={(option) => {
                  setFromLocation(option.value);
                }}
              />
              <SearchableInput
                label="To"
                placeholder="Search destination airport"
                selectedValue={toLocation}
                selectedLabel={toLocation?.presentation.suggestionTitle}
                onSearchChange={setToSearchQuery}
                options={
                  toSearchQuery ? toAirportSearchResults : nearbyAirports
                }
                onSelect={(option) => {
                  setToLocation(option.value);
                }}
              />
              <View className="gap-1">
                <Label>Departure Date</Label>
                <DatePicker
                  value={departureDate}
                  onValueChange={setDepartureDate}
                  placeholder="Select departure date"
                  minDate={moment().format("YYYY-MM-DD")}
                />
              </View>
              <View className="gap-1">
                <Label>Return Date</Label>
                <DatePicker
                  value={returnDate}
                  onValueChange={setReturnDate}
                  placeholder="Select return date"
                  minDate={departureDate || moment().format("YYYY-MM-DD")}
                />
              </View>
              <Button className="w-full mt-2" onPress={handleFlightSearch}>
                <Text>Search Flights</Text>
              </Button>
            </CardContent>
          </Card>
          {/* Flight Results */}
          {isFlightsSearchFetched && (
            <View className="flex-1">
              <FlightResultsList
                flights={flightsSearchData?.data?.itineraries || []}
                isLoading={isFlightsSearchLoading}
                onFlightPress={handleFlightPress}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
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

const useNearbyAirportsPrefill =
  (): SearchableInputOption<AirportLocation>[] => {
    const userLocation = useUserLocation();
    const nearbyAirports = useNearbyAirports(
      userLocation
        ? {
            lat: userLocation?.coords.latitude,
            lng: userLocation?.coords.longitude,
          }
        : null
    );

    const airportMapper = (airport: AirportLocation) => ({
      value: airport,
      label: airport.presentation.suggestionTitle,
      description: airport.presentation.subtitle,
    });

    const nearbyAirportOptions: SearchableInputOption<AirportLocation>[] = [];

    if (nearbyAirports.data?.data.current) {
      nearbyAirportOptions.push(
        airportMapper(nearbyAirports.data.data.current)
      );
    }
    if (nearbyAirports.data?.data.nearby) {
      nearbyAirportOptions.push(
        ...nearbyAirports.data.data.nearby.map(airportMapper)
      );
    }

    return nearbyAirportOptions;
  };

const useAirportSearch = (
  searchQuery: string
): SearchableInputOption<AirportLocation>[] => {
  const airportSearch = useSearchAirports({
    query: searchQuery,
  });

  return airportSearch.isFetched
    ? airportSearch.data?.data.map((airport) => ({
        value: airport,
        label: airport.presentation.suggestionTitle,
        description: airport.presentation.subtitle,
      })) || []
    : [];
};
