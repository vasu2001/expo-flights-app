import React from "react";
import { View, Image, Pressable } from "react-native";
import { Text } from "./text";
import { Card, CardContent } from "./card";
import { FlightItinerary } from "~/api/flight-client";

interface FlightResultCardProps {
  flight: FlightItinerary;
  onPress?: () => void;
}

export function FlightResultCard({ flight, onPress }: FlightResultCardProps) {
  // Extract destination from the first leg
  const destination = flight.legs[0]?.destination;
  const origin = flight.legs[0]?.origin;

  // Calculate total duration
  const totalDuration = flight.legs.reduce(
    (acc, leg) => acc + leg.durationInMinutes,
    0
  );
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  // Get stop count
  const totalStops = flight.legs.reduce((acc, leg) => acc + leg.stopCount, 0);

  // Format dates
  const departureDate = new Date(flight.legs[0]?.departure || "");
  const returnDate =
    flight.legs.length > 1 ? new Date(flight.legs[1]?.departure || "") : null;

  // Get airline info
  const airline =
    flight.legs[0]?.carriers.marketing[0]?.name || "Multiple Airlines";

  // Generate a placeholder image URL based on destination
  const imageUrl = flight.legs?.[0]?.carriers.marketing?.[0]?.logoUrl;

  return (
    <Pressable onPress={onPress}>
      <Card className="mb-4 overflow-hidden">
        <CardContent className="p-0">
          <View className="flex-row">
            {/* Left Section - Image */}
            <View className="w-24 h-24">
              <Image
                source={{ uri: imageUrl }}
                className="w-full h-full rounded-l-lg"
                resizeMode="cover"
              />
            </View>

            {/* Right Section - Flight Details */}
            <View className="flex-1 p-4 justify-between">
              <View className="flex-1">
                {/* Destination */}
                <Text className="text-lg font-bold text-foreground mb-1">
                  {destination?.city || destination?.name}
                </Text>

                {/* Dates */}
                <Text className="text-sm text-muted-foreground mb-2">
                  {departureDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                  {returnDate &&
                    ` – ${returnDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}`}
                </Text>

                {/* Flight Details */}
                <View className="flex-row items-center gap-2">
                  <View className="w-4 h-4">
                    <View className="w-3 h-3 border border-muted-foreground rounded-full" />
                    <View className="w-0.5 h-2 bg-muted-foreground mx-auto mt-0.5" />
                    <View className="w-2 h-2 bg-muted-foreground rounded-full mx-auto mt-0.5" />
                  </View>
                  <Text className="text-sm text-muted-foreground">
                    {totalStops === 0
                      ? "Direct"
                      : `${totalStops} stop${totalStops > 1 ? "s" : ""}`}
                  </Text>
                  <View className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <Text className="text-sm text-muted-foreground">
                    {hours}h {minutes}m
                  </Text>
                </View>
              </View>

              {/* Price */}
              <View className="items-end">
                <Text className="text-lg font-bold text-foreground">
                  ₹{flight.price.raw.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
}
