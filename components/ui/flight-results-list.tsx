import React from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { Text } from "./text";
import { FlightResultCard } from "./flight-result-card";
import { FlightItinerary } from "~/api/flight-client";

interface FlightResultsListProps {
  flights: FlightItinerary[];
  isLoading: boolean;
  onFlightPress?: (flight: FlightItinerary) => void;
}

export function FlightResultsList({
  flights,
  isLoading,
  onFlightPress,
}: FlightResultsListProps) {
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <ActivityIndicator size="large" />
        <Text className="text-muted-foreground mt-4">
          Searching for flights...
        </Text>
      </View>
    );
  }

  if (!flights || flights.length === 0) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <Text className="text-lg font-semibold text-foreground mb-2">
          No flights found
        </Text>
        <Text className="text-muted-foreground text-center px-4">
          Try adjusting your search criteria or dates to find available flights.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="px-6">
        {/* Results Header */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-semibold text-foreground">
            {flights.length} flight{flights.length !== 1 ? "s" : ""} found
          </Text>
        </View>

        {/* Flight Results */}
        {flights.map((flight) => (
          <FlightResultCard
            key={flight.id}
            flight={flight}
            onPress={() => onFlightPress?.(flight)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
